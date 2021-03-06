import { renderHook } from "@testing-library/react-hooks"
import { useLatest } from "../../src/hooks/use-latest"
import { number } from "../constants"
import { createRef } from "../helpers"

describe("useLatest", () => {
  test("should return a ref that mutates when its given value changes", () => {
    const { result, rerender } = renderHook(({ value }) => useLatest(value), {
      initialProps: { value: 0 }
    })

    rerender({ value: number })

    expect(result.current).toStrictEqual(createRef(number))
  })
})
