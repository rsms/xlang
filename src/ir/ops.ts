// generated from arch/*_ops.ts -- do not edit.
import { Op, OpInfo, AuxType, SymEffect } from "../ir/op"
import { UInt64 } from "../int64"
import {
  t_bool,
  t_f32,
  t_f64,
  t_i16,
  t_i32,
  t_i64,
  t_u16,
  t_u32,
  t_u64,
  t_usize
} from "../types"

const u64_ffff = new UInt64(65535,0),
      u64_10000ffff = new UInt64(65535,1);

export const ops = {
  
  // generic
  Invalid: 0,
  Unknown: 1,
  Phi: 2,
  Copy: 3,
  Arg: 4,
  CallArg: 5,
  NilCheck: 6,
  Call: 7,
  TailCall: 8,
  ConstBool: 9,
  ConstI8: 10,
  ConstI16: 11,
  ConstI32: 12,
  ConstI64: 13,
  ConstF32: 14,
  ConstF64: 15,
  ConstString: 16,
  SP: 17,
  SB: 18,
  Load: 19,
  Store: 20,
  Move: 21,
  Zero: 22,
  StoreReg: 23,
  LoadReg: 24,
  AddI8: 25,
  AddI16: 26,
  AddI32: 27,
  AddI64: 28,
  AddF32: 29,
  AddF64: 30,
  SubI8: 31,
  SubI16: 32,
  SubI32: 33,
  SubI64: 34,
  SubF32: 35,
  SubF64: 36,
  MulI8: 37,
  MulI16: 38,
  MulI32: 39,
  MulI64: 40,
  MulF32: 41,
  MulF64: 42,
  DivS8: 43,
  DivU8: 44,
  DivS16: 45,
  DivU16: 46,
  DivS32: 47,
  DivU32: 48,
  DivS64: 49,
  DivU64: 50,
  DivF32: 51,
  DivF64: 52,
  RemS8: 53,
  RemU8: 54,
  RemS16: 55,
  RemU16: 56,
  RemS32: 57,
  RemU32: 58,
  RemI64: 59,
  RemU64: 60,
  AndI8: 61,
  AndI16: 62,
  AndI32: 63,
  AndI64: 64,
  OrI8: 65,
  OrI16: 66,
  OrI32: 67,
  OrI64: 68,
  XorI8: 69,
  XorI16: 70,
  XorI32: 71,
  XorI64: 72,
  ShLI8x8: 73,
  ShLI8x16: 74,
  ShLI8x32: 75,
  ShLI8x64: 76,
  ShLI16x8: 77,
  ShLI16x16: 78,
  ShLI16x32: 79,
  ShLI16x64: 80,
  ShLI32x8: 81,
  ShLI32x16: 82,
  ShLI32x32: 83,
  ShLI32x64: 84,
  ShLI64x8: 85,
  ShLI64x16: 86,
  ShLI64x32: 87,
  ShLI64x64: 88,
  ShRS8x8: 89,
  ShRS8x16: 90,
  ShRS8x32: 91,
  ShRS8x64: 92,
  ShRS16x8: 93,
  ShRS16x16: 94,
  ShRS16x32: 95,
  ShRS16x64: 96,
  ShRS32x8: 97,
  ShRS32x16: 98,
  ShRS32x32: 99,
  ShRS32x64: 100,
  ShRS64x8: 101,
  ShRS64x16: 102,
  ShRS64x32: 103,
  ShRS64x64: 104,
  ShRU8x8: 105,
  ShRU8x16: 106,
  ShRU8x32: 107,
  ShRU8x64: 108,
  ShRU16x8: 109,
  ShRU16x16: 110,
  ShRU16x32: 111,
  ShRU16x64: 112,
  ShRU32x8: 113,
  ShRU32x16: 114,
  ShRU32x32: 115,
  ShRU32x64: 116,
  ShRU64x8: 117,
  ShRU64x16: 118,
  ShRU64x32: 119,
  ShRU64x64: 120,
  EqI8: 121,
  EqI16: 122,
  EqI32: 123,
  EqI64: 124,
  EqF32: 125,
  EqF64: 126,
  NeqI8: 127,
  NeqI16: 128,
  NeqI32: 129,
  NeqI64: 130,
  NeqF32: 131,
  NeqF64: 132,
  LessS8: 133,
  LessU8: 134,
  LessS16: 135,
  LessU16: 136,
  LessS32: 137,
  LessU32: 138,
  LessS64: 139,
  LessU64: 140,
  LessF32: 141,
  LessF64: 142,
  LeqS8: 143,
  LeqU8: 144,
  LeqS16: 145,
  LeqU16: 146,
  LeqS32: 147,
  LeqU32: 148,
  LeqS64: 149,
  LeqU64: 150,
  LeqF32: 151,
  LeqF64: 152,
  GreaterS8: 153,
  GreaterU8: 154,
  GreaterS16: 155,
  GreaterU16: 156,
  GreaterS32: 157,
  GreaterU32: 158,
  GreaterS64: 159,
  GreaterU64: 160,
  GreaterF32: 161,
  GreaterF64: 162,
  GeqS8: 163,
  GeqU8: 164,
  GeqS16: 165,
  GeqU16: 166,
  GeqS32: 167,
  GeqU32: 168,
  GeqS64: 169,
  GeqU64: 170,
  GeqF32: 171,
  GeqF64: 172,
  Not: 173,
  MinF32: 174,
  MinF64: 175,
  MaxF32: 176,
  MaxF64: 177,
  NegI8: 178,
  NegI16: 179,
  NegI32: 180,
  NegI64: 181,
  NegF32: 182,
  NegF64: 183,
  CtzI8: 184,
  CtzI16: 185,
  CtzI32: 186,
  CtzI64: 187,
  CtzI8NonZero: 188,
  CtzI16NonZero: 189,
  CtzI32NonZero: 190,
  CtzI64NonZero: 191,
  BitLen8: 192,
  BitLen16: 193,
  BitLen32: 194,
  BitLen64: 195,
  PopCountI8: 196,
  PopCountI16: 197,
  PopCountI32: 198,
  PopCountI64: 199,
  SqrtF32: 200,
  SqrtF64: 201,
  FloorF32: 202,
  FloorF64: 203,
  CeilF32: 204,
  CeilF64: 205,
  TruncF32: 206,
  TruncF64: 207,
  RoundF32: 208,
  RoundF64: 209,
  RoundToEvenF32: 210,
  RoundToEvenF64: 211,
  AbsF32: 212,
  AbsF64: 213,
  CopysignF32: 214,
  CopysignF64: 215,
  SignExtI8to16: 216,
  SignExtI8to32: 217,
  SignExtI8to64: 218,
  SignExtI16to32: 219,
  SignExtI16to64: 220,
  SignExtI32to64: 221,
  ZeroExtI8to16: 222,
  ZeroExtI8to32: 223,
  ZeroExtI8to64: 224,
  ZeroExtI16to32: 225,
  ZeroExtI16to64: 226,
  ZeroExtI32to64: 227,
  TruncI8toBool: 228,
  TruncI16toBool: 229,
  TruncI32toBool: 230,
  TruncI64toBool: 231,
  TruncF32toBool: 232,
  TruncF64toBool: 233,
  TruncI16to8: 234,
  TruncI32to8: 235,
  TruncI32to16: 236,
  TruncI64to8: 237,
  TruncI64to16: 238,
  TruncI64to32: 239,
  ConvI32toF32: 240,
  ConvI32toF64: 241,
  ConvI64toF32: 242,
  ConvI64toF64: 243,
  ConvF32toI32: 244,
  ConvF32toI64: 245,
  ConvF64toI32: 246,
  ConvF64toI64: 247,
  ConvF32toF64: 248,
  ConvF64toF32: 249,
  ConvU32toF32: 250,
  ConvU32toF64: 251,
  ConvF32toU32: 252,
  ConvF64toU32: 253,
  ConvU64toF32: 254,
  ConvU64toF64: 255,
  ConvF32toU64: 256,
  ConvF64toU64: 257,
  AtomicLoad32: 258,
  AtomicLoad64: 259,
  AtomicLoadPtr: 260,
  AtomicStore32: 261,
  AtomicStore64: 262,
  AtomicStorePtrNoWB: 263,
  AtomicExchange32: 264,
  AtomicExchange64: 265,
  AtomicAdd32: 266,
  AtomicAdd64: 267,
  AtomicCompareAndSwap32: 268,
  AtomicCompareAndSwap64: 269,
  AtomicAnd8: 270,
  AtomicOr8: 271,

  // covm
  CovmMOV32const: 272,
  CovmADD32: 273,
  CovmADD32const: 274,
  CovmADD64: 275,
  CovmMUL32: 276,
  CovmZeroLarge: 277,
  CovmLowNilCheck: 278,

  // END
  OpcodeMax: undefined,
};

export const opinfo :OpInfo[] = [

  // generic
  { name: "Invalid",
    argLen: 0,
    generic: true,
  },
  { name: "Unknown",
    argLen: 0,
    generic: true,
  },
  { name: "Phi",
    argLen: -1,
    generic: true,
    zeroWidth: true,
  },
  { name: "Copy",
    argLen: 1,
    generic: true,
  },
  { name: "Arg",
    argLen: 0,
    aux: AuxType.Int32,
    generic: true,
    zeroWidth: true,
  },
  { name: "CallArg",
    argLen: 1,
    generic: true,
    zeroWidth: true,
  },
  { name: "NilCheck",
    argLen: 2,
    faultOnNilArg0: true,
    generic: true,
    nilCheck: true,
  },
  { name: "Call",
    argLen: 1,
    aux: AuxType.Int64,
    call: true,
    generic: true,
  },
  { name: "TailCall",
    argLen: 1,
    aux: AuxType.Int64,
    call: true,
    generic: true,
  },
  { name: "ConstBool",
    argLen: 0,
    aux: AuxType.Bool,
    constant: true,
    generic: true,
  },
  { name: "ConstI8",
    argLen: 0,
    aux: AuxType.Int8,
    constant: true,
    generic: true,
  },
  { name: "ConstI16",
    argLen: 0,
    aux: AuxType.Int16,
    constant: true,
    generic: true,
  },
  { name: "ConstI32",
    argLen: 0,
    aux: AuxType.Int32,
    constant: true,
    generic: true,
  },
  { name: "ConstI64",
    argLen: 0,
    aux: AuxType.Int64,
    constant: true,
    generic: true,
  },
  { name: "ConstF32",
    argLen: 0,
    aux: AuxType.Int32,
    constant: true,
    generic: true,
  },
  { name: "ConstF64",
    argLen: 0,
    aux: AuxType.Int64,
    constant: true,
    generic: true,
  },
  { name: "ConstString",
    argLen: 0,
    aux: AuxType.String,
    generic: true,
  },
  { name: "SP",
    argLen: 0,
    generic: true,
    zeroWidth: true,
  },
  { name: "SB",
    argLen: 0,
    generic: true,
    type: t_usize,
    zeroWidth: true,
  },
  { name: "Load",
    argLen: 2,
    generic: true,
  },
  { name: "Store",
    argLen: 3,
    generic: true,
    type: t_usize,
  },
  { name: "Move",
    argLen: 3,
    generic: true,
    type: t_usize,
  },
  { name: "Zero",
    argLen: 2,
    generic: true,
    type: t_usize,
  },
  { name: "StoreReg",
    argLen: 1,
    generic: true,
  },
  { name: "LoadReg",
    argLen: 1,
    generic: true,
  },
  { name: "AddI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddF32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AddF64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubI64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubF32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "SubF64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulF32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "MulF64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivS64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivU64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivF32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "DivF64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU8",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU16",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemS32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU32",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemI64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "RemU64",
    argLen: 2,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "AndI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "OrI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI8",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI16",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI32",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "XorI64",
    argLen: 2,
    commutative: true,
    generic: true,
    resultInArg0: true,
  },
  { name: "ShLI8x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI8x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI8x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI8x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI16x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI16x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI16x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI16x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI32x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI32x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI32x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI32x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI64x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI64x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI64x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShLI64x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS8x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS8x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS8x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS8x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS16x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS16x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS16x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS16x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS32x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS32x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS32x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS32x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS64x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS64x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS64x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRS64x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU8x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU8x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU8x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU8x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU16x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU16x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU16x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU16x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU32x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU32x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU32x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU32x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU64x8",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU64x16",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU64x32",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "ShRU64x64",
    argLen: 2,
    aux: AuxType.Bool,
    generic: true,
  },
  { name: "EqI8",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI16",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqI64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqF32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "EqF64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI8",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI16",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqI64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqF32",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "NeqF64",
    argLen: 2,
    commutative: true,
    generic: true,
    type: t_bool,
  },
  { name: "LessS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LessF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "LeqF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GreaterF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU8",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU16",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqS64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqU64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqF32",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "GeqF64",
    argLen: 2,
    generic: true,
    type: t_bool,
  },
  { name: "Not",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "MinF32",
    argLen: 2,
    generic: true,
  },
  { name: "MinF64",
    argLen: 2,
    generic: true,
  },
  { name: "MaxF32",
    argLen: 2,
    generic: true,
  },
  { name: "MaxF64",
    argLen: 2,
    generic: true,
  },
  { name: "NegI8",
    argLen: 1,
    generic: true,
  },
  { name: "NegI16",
    argLen: 1,
    generic: true,
  },
  { name: "NegI32",
    argLen: 1,
    generic: true,
  },
  { name: "NegI64",
    argLen: 1,
    generic: true,
  },
  { name: "NegF32",
    argLen: 1,
    generic: true,
  },
  { name: "NegF64",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI8",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI16",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI32",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI64",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI8NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI16NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI32NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "CtzI64NonZero",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen8",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen16",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen32",
    argLen: 1,
    generic: true,
  },
  { name: "BitLen64",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI8",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI16",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI32",
    argLen: 1,
    generic: true,
  },
  { name: "PopCountI64",
    argLen: 1,
    generic: true,
  },
  { name: "SqrtF32",
    argLen: 1,
    generic: true,
  },
  { name: "SqrtF64",
    argLen: 1,
    generic: true,
  },
  { name: "FloorF32",
    argLen: 1,
    generic: true,
  },
  { name: "FloorF64",
    argLen: 1,
    generic: true,
  },
  { name: "CeilF32",
    argLen: 1,
    generic: true,
  },
  { name: "CeilF64",
    argLen: 1,
    generic: true,
  },
  { name: "TruncF32",
    argLen: 1,
    generic: true,
  },
  { name: "TruncF64",
    argLen: 1,
    generic: true,
  },
  { name: "RoundF32",
    argLen: 1,
    generic: true,
  },
  { name: "RoundF64",
    argLen: 1,
    generic: true,
  },
  { name: "RoundToEvenF32",
    argLen: 1,
    generic: true,
  },
  { name: "RoundToEvenF64",
    argLen: 1,
    generic: true,
  },
  { name: "AbsF32",
    argLen: 1,
    generic: true,
  },
  { name: "AbsF64",
    argLen: 1,
    generic: true,
  },
  { name: "CopysignF32",
    argLen: 2,
    generic: true,
  },
  { name: "CopysignF64",
    argLen: 2,
    generic: true,
  },
  { name: "SignExtI8to16",
    argLen: 1,
    generic: true,
    type: t_i16,
  },
  { name: "SignExtI8to32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "SignExtI8to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "SignExtI16to32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "SignExtI16to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "SignExtI32to64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ZeroExtI8to16",
    argLen: 1,
    generic: true,
    type: t_u16,
  },
  { name: "ZeroExtI8to32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ZeroExtI8to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ZeroExtI16to32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ZeroExtI16to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ZeroExtI32to64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "TruncI8toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI16toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI32toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI64toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncF32toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncF64toBool",
    argLen: 1,
    generic: true,
    type: t_bool,
  },
  { name: "TruncI16to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI32to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI32to16",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to8",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to16",
    argLen: 1,
    generic: true,
  },
  { name: "TruncI64to32",
    argLen: 1,
    generic: true,
  },
  { name: "ConvI32toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvI32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvI64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvI64toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toI32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "ConvF32toI64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ConvF64toI32",
    argLen: 1,
    generic: true,
    type: t_i32,
  },
  { name: "ConvF64toI64",
    argLen: 1,
    generic: true,
    type: t_i64,
  },
  { name: "ConvF32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU32toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU32toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toU32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ConvF64toU32",
    argLen: 1,
    generic: true,
    type: t_u32,
  },
  { name: "ConvU64toF32",
    argLen: 1,
    generic: true,
    type: t_f32,
  },
  { name: "ConvU64toF64",
    argLen: 1,
    generic: true,
    type: t_f64,
  },
  { name: "ConvF32toU64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "ConvF64toU64",
    argLen: 1,
    generic: true,
    type: t_u64,
  },
  { name: "AtomicLoad32",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicLoad64",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicLoadPtr",
    argLen: 2,
    generic: true,
  },
  { name: "AtomicStore32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicStore64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicStorePtrNoWB",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },
  { name: "AtomicExchange32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicExchange64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAdd32",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAdd64",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicCompareAndSwap32",
    argLen: 4,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicCompareAndSwap64",
    argLen: 4,
    generic: true,
    hasSideEffects: true,
  },
  { name: "AtomicAnd8",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },
  { name: "AtomicOr8",
    argLen: 3,
    generic: true,
    hasSideEffects: true,
    type: t_usize,
  },

  // covm
  { name: "MOV32const",
    argLen: 0,
    aux: AuxType.Int32,
    reg: {
      inputs: [],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    rematerializeable: true,
    type: t_u32,
  },
  { name: "ADD32",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ADD32const",
    argLen: 1,
    aux: AuxType.Int32,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ADD64",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u64,
  },
  { name: "MUL32",
    argLen: 2,
    commutative: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/},
        {idx:1,regs:u64_10000ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 r32 }*/}
      ],
      outputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      clobbers: UInt64.ZERO
    },
    type: t_u32,
  },
  { name: "ZeroLarge",
    argLen: 2,
    aux: AuxType.Int64,
    reg: {
      inputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      outputs: [],
      clobbers: UInt64.ZERO
    },
  },
  { name: "LowNilCheck",
    argLen: 2,
    faultOnNilArg0: true,
    nilCheck: true,
    reg: {
      inputs: [
        {idx:0,regs:u64_ffff /*RegSet { r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 }*/}
      ],
      outputs: [],
      clobbers: UInt64.ZERO
    },
  },
]; // ops



// fmtop returns a printable representation of an operator
//
export function fmtop(op :Op) :string {
  let info = opinfo[op]
  assert(info, `unknown op #${op}`)
  return info.name
}
