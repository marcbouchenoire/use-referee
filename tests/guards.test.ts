import * as assert from "uvu/assert"
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
import { describe } from "./helpers"

describe("isFunction", (it) => {
  it("should return true for functions", () => {
    assert.equal(isFunction(fun), true)
  })

  it("should return false for any other types", () => {
    assert.equal(isFunction(array), false)
    assert.equal(isFunction(boolean), false)
    assert.equal(isFunction(map), false)
    assert.equal(isFunction(number), false)
    assert.equal(isFunction(object), false)
    assert.equal(isFunction(set), false)
    assert.equal(isFunction(string), false)
  })
})

describe("isSomething", (it) => {
  it("should return false for undefined and null", () => {
    assert.equal(isSomething(undefined), false)
    assert.equal(isSomething(null), false)
  })

  it("should return true for any other types", () => {
    assert.equal(isSomething(array), true)
    assert.equal(isSomething(boolean), true)
    assert.equal(isSomething(fun), true)
    assert.equal(isSomething(map), true)
    assert.equal(isSomething(number), true)
    assert.equal(isSomething(object), true)
    assert.equal(isSomething(set), true)
    assert.equal(isSomething(string), true)
  })
})
