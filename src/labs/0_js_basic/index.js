import raw from "raw.macro";

import { default as fizzBuzz } from "./010_fizzbuz";
import { default as printInput } from "./000_printInput";
import { default as sumOfDigits } from "./020_sumOfDigits";
import { default as maxMinArray } from "./021_max_min_InArray";
import { default as reverseString } from "./001_reverseString";
export default [
  {
    solution: fizzBuzz,
    code: raw("./010_fizzbuz")
  },
  { solution: printInput, code: raw("./000_printInput") },
  {
    solution: sumOfDigits,
    code: raw("./020_sumOfDigits")
  },
  {
    solution: maxMinArray,
    code: raw("./021_max_min_InArray")
  },
  {
    solution: reverseString,
    code: raw("./001_reverseString")
  }
];
