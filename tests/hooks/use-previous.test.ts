import { renderHook } from "@testing-library/react-hooks"
import { usePrevious } from "../../src/hooks/use-previous"
import { number } from "../constants"

describe("usePrevious", () => {
  test("should return its previous value", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 }
    })

    expect(result.current).toBeUndefined()

    rerender({ value: number })

    expect(result.current).toBe(0)

    rerender()

    expect(result.current).toBe(number)

    rerender()

    expect(result.current).toBe(number)
  })
})
