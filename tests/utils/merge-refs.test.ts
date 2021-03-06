import { RefCallback } from "react"
import { isSomething } from "../../src/guards"
import { mergeRefs } from "../../src/utils/merge-refs"
import { number } from "../constants"
import { createRef } from "../helpers"

describe("mergeRefs", () => {
  test("should apply a value to multiple refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    mergeRefs(number, ref, callbackRef)

    expect(ref).toStrictEqual(createRef(number))
    expect(callbackRefValue).toBe(number)
  })
})
