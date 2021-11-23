import { renderHook } from "@testing-library/react-hooks"
import { RefCallback } from "react"
import * as assert from "uvu/assert"
import { isSomething } from "../../src/guards"
import { useRefs } from "../../src/hooks/use-refs"
import { number } from "../constants"
import { createRef, describe } from "../helpers"

describe("useRefs", (it) => {
  it("should return a callback ref that will apply a value to multiple refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    const { result } = renderHook(() => useRefs(ref, callbackRef))

    result.current(number)

    assert.equal(ref, createRef(number))
    assert.equal(callbackRefValue, number)
  })
})
