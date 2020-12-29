import { isFunction } from "../src/guards"
import {
  array,
  boolean,
  fun,
  map,
  number,
  object,
  set,
  string
} from "./constants"

describe("isFunction", () => {
  test("should return true for functions", () => {
    expect(isFunction(fun)).toBeTruthy()
  })

  test("should return false for any other types", () => {
    expect(isFunction(array)).toBeFalsy()
    expect(isFunction(boolean)).toBeFalsy()
    expect(isFunction(map)).toBeFalsy()
    expect(isFunction(number)).toBeFalsy()
    expect(isFunction(object)).toBeFalsy()
    expect(isFunction(set)).toBeFalsy()
    expect(isFunction(string)).toBeFalsy()
  })
})
