import { renderHook } from "@testing-library/react-hooks"
import { RefCallback } from "react"
import { isSomething } from "../../src/guards"
import { useRefs } from "../../src/hooks/use-refs"
import { number } from "../constants"
import { createRef } from "../helpers"

describe("useRefs", () => {
  test("should return a callback ref that will apply a value to multiple refs", () => {
    const ref = createRef(0)
    let callbackRefValue = 0
    const callbackRef: RefCallback<number> = (value) => {
      if (isSomething(value)) {
        callbackRefValue = value
      }
    }

    const { result } = renderHook(() => useRefs(ref, callbackRef))

    result.current(number)

    expect(ref).toStrictEqual(createRef(number))
    expect(callbackRefValue).toBe(number)
  })
})
