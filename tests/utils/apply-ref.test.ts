import { RefCallback } from "react"
import { isSomething } from "../../src/guards"
import { applyRef } from "../../src/utils/apply-ref"
import { number } from "../constants"
import { createRef } from "../helpers"

describe("applyRef", () => {
  test("should apply a value to both mutable ref objects and callback refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    applyRef(ref, number)
    applyRef(callbackRef, number)

    expect(ref).toStrictEqual(createRef(number))
    expect(callbackRefValue).toBe(number)
  })
})
