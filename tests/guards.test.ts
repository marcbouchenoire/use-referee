import { isFunction, isSomething } from "../src/guards"
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

describe("isSomething", () => {
  test("should return false for undefined and null", () => {
    expect(isSomething(undefined)).toBeFalsy()
    expect(isSomething(null)).toBeFalsy()
  })

  test("should return true for any other types", () => {
    expect(isSomething(array)).toBeTruthy()
    expect(isSomething(boolean)).toBeTruthy()
    expect(isSomething(fun)).toBeTruthy()
    expect(isSomething(map)).toBeTruthy()
    expect(isSomething(number)).toBeTruthy()
    expect(isSomething(object)).toBeTruthy()
    expect(isSomething(set)).toBeTruthy()
    expect(isSomething(string)).toBeTruthy()
  })
})
