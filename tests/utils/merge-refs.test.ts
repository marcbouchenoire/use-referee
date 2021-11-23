import { RefCallback } from "react"
import * as assert from "uvu/assert"
import { isSomething } from "../../src/guards"
import { mergeRefs } from "../../src/utils/merge-refs"
import { number } from "../constants"
import { createRef, describe } from "../helpers"

describe("mergeRefs", (it) => {
  it("should apply a value to multiple refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    mergeRefs(number, ref, callbackRef)

    assert.equal(ref, createRef(number))
    assert.equal(callbackRefValue, number)
  })
})
