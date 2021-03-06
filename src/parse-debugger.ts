import './global'
import * as scanner from './scanner'
import { Position, SrcFileSet } from './pos'
import * as utf8 from './utf8'
import {
  token,
  hasByteValue,
  hasIntValue,
  tokIsKeyword,
  tokstr,
  prec,
} from './token'
import * as fs from 'fs'
import * as http from 'http'
import * as Path from 'path'
import * as Url from 'url'
import * as subproc from 'child_process'


const state = {
  version: '0',
  files: [] as FileInfo[],
}

interface FileInfo {
  name: string
  tokens: Tok[]
  errors: Err[]
  parseTime :string
}

interface Err {
  message: string
  position: Position
  posstr: string
}

interface Tok {
  type: string  // typename of token
  name: string  // name of token
  isKeyword: bool
  position: Position
  posstr: string
  value?: string|int
  prec?:  string // precedence; operators only
}


const sourceDir = Path.join(__dirname, '..', 'example')
const sourceFiles = fs.readdirSync(sourceDir)
  .filter(fn => fn.endsWith('.go') && fn[0] != '.')
  .map(fn => 'example/' + fn)
const s = new scanner.Scanner()


function fmtDuration(milliseconds :int) :string {
  return (
    milliseconds < 0.001 ? `${(milliseconds * 1000000).toFixed(0)} ns` :
    milliseconds < 0.1 ? `${(milliseconds * 1000).toFixed(0)} µs` :
    `${milliseconds.toFixed(1)} ms`
  )
}


function parseFiles() {
  console.log('parseFiles')
  const fileSet = new SrcFileSet()
  const files :FileInfo[] = []

  for (let filename of sourceFiles) {
    const fi :FileInfo = {
      name: filename,
      tokens: [],
      errors: [],
      parseTime: ''
    }
    const src = new Uint8Array(fs.readFileSync(filename, {flag:'r'}))
    const file = fileSet.addFile(filename, src.length)

    const onErr = (position :Position, message :string) => {
      console.error(`[error] ${message} at ${position}`)
      fi.errors.push({ message, position, posstr: position.toString() })
    }

    // benchmark
    const iterations = 1000
    let t1 = process.hrtime()
    for (let i = 0; i < iterations; ++i) {
      s.init(file, src, null, scanner.Mode.ScanComments)
      do { s.next() } while (s.tok != token.EOF)
    }
    let t2 = process.hrtime()
    let td = ((t2[0] * 1000) + (t2[1] / 1000000)) - ((t1[0] * 1000) + (t1[1] / 1000000))
    fi.parseTime = fmtDuration(td / iterations)
    console.log(`${filename} ${fi.parseTime}`)

    s.init(file, src, onErr, scanner.Mode.ScanComments)
    s.next()

    while (s.tok != token.EOF) {
      const t = s.tok
      const position = file.position(s.pos)

      fi.tokens.push({
        type: token[t],
        name: tokstr(t),
        isKeyword: tokIsKeyword(t),
        position,
        posstr: position.toString(),
        value: (
          hasIntValue(t) ? s.intval :
          // utf8.decodeToString(s.byteValue())
          hasByteValue(t) ? utf8.decodeToString(s.byteValue()) :
          undefined
        ),
        prec: (
          (token.operator_beg < t && t < token.operator_end) ?
            prec[s.prec] : undefined
        ),
      })

      s.next()
    }

    files.push(fi)
  }

  state.version = Date.now().toString(36)
  state.files = files
}


let httpServer :http.Server|null = null


function restartAsSubproc() {
  console.log('restarting server')
  const p = subproc.fork(__filename, [], {
    env: { ...process.env, IS_SUBPROCESS: '1', }
  })
  p.on('exit', (code, signal) => {
    if (code == 0) {
      restartAsSubproc()
    } else {
      process.exit(code)
    }
  })
}


function main() {
  startHttpServer()
  parseFiles()

  let parseTimer :any = null
  for (let filename of sourceFiles) {
    fs.watchFile(filename, {interval:200}, (curr: fs.Stats, prev :fs.Stats) => {
      if (parseTimer === null) {
        parseTimer = setTimeout(() => {
          parseTimer = null
          parseFiles()
        }, 100)
      }
    })
  }

  // reload self on changes
  setTimeout(() => {
    const selfSourceFiles = new Set<string>()
    for (let filename of fs.readdirSync(__dirname)) {
      selfSourceFiles.add(Path.join(__dirname, filename))
    }
    selfSourceFiles.add(sourceDir)

    let isClosing = false
    const onSourceChanged = (curr: fs.Stats, prev :fs.Stats) => {
      // console.log(process.pid, 'server changed')
      for (let filename of selfSourceFiles) {
        fs.unwatchFile(filename)
      }

      for (let filename of sourceFiles) {
        fs.unwatchFile(filename)
      }

      if (process.env.IS_SUBPROCESS) {
        process.exit(0)
        return
      }

      if (isClosing) {
        return
      }
      isClosing = true

      if (httpServer) {
        // console.log(process.pid, 'closing server', httpServer.listening)
        httpServer.close(() => {
          setTimeout(restartAsSubproc, 100)
        })
        httpServer.unref()
      } else {
        setTimeout(restartAsSubproc, 100)
      }
    }

    for (let filename of selfSourceFiles) {
      fs.watchFile(filename, {interval:200}, onSourceChanged)
    }
  }, 500)
}


function startHttpServer() {
  httpServer = http.createServer((req :http.IncomingMessage, res :http.ServerResponse) => {
    const url = Url.parse(req.url || '', true)
    const q = url.query as {[k:string]:any}

    res.setHeader('Connection','close')

    if (url.pathname == '/poll') {
      const version = q.version as string || ''
      const filter = q.filter ? (q.filter as string).toLowerCase() : ''
      res.setHeader('Content-Type','application/json')
      try {
        let st = state.version == version ? null : state
        if (filter && st) {
          st = {...state}
          st.files = state.files.filter(f =>
            f.name.toLowerCase().includes(filter))
        }
        res.end(JSON.stringify(st))
      } catch (err) {
        console.error('error in response handler', err.stack || err)
        res.end('null')
      }
      return
    }

    res.setHeader('Content-Type','text/html')
    res.end(fs.readFileSync('misc/parse-debugger.html'))
  })
  httpServer.listen(8984, '127.0.0.1')
  console.log('listening on http://127.0.0.1:8984')
}


main()
