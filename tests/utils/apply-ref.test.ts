import { RefCallback } from "react"
import * as assert from "uvu/assert"
import { isSomething } from "../../src/guards"
import { applyRef } from "../../src/utils/apply-ref"
import { number } from "../constants"
import { createRef, describe } from "../helpers"

describe("applyRef", (it) => {
  it("should apply a value to both mutable ref objects and callback refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    applyRef(ref, number)
    applyRef(callbackRef, number)

    assert.equal(ref, createRef(number))
    assert.equal(callbackRefValue, number)
  })
})
