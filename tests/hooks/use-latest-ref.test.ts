import { renderHook } from "@testing-library/react-hooks"
import { useLatestRef } from "../../src/hooks"
import { number } from "../constants"
import { createRef } from "../helpers"

describe("useLatestRef", () => {
  test("should return a ref that mutates when its given value changes", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useLatestRef(value),
      {
        initialProps: { value: 0 }
      }
    )

    rerender({ value: number })

    expect(result.current).toStrictEqual(createRef(number))
  })
})
