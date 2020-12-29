import { renderHook } from "@testing-library/react-hooks"
import { usePreviousRef } from "../../src/hooks"
import { number } from "../constants"

describe("usePreviousRef", () => {
  test("should return its previous value", () => {
    const { result, rerender } = renderHook(
      ({ value }) => usePreviousRef(value),
      {
        initialProps: { value: 0 }
      }
    )

    expect(result.current).toBe(undefined)

    rerender({ value: number })

    expect(result.current).toBe(0)

    rerender()

    expect(result.current).toBe(number)

    rerender()

    expect(result.current).toBe(number)
  })
})
