import { renderHook } from "@testing-library/react-hooks"
import { useLazyRef } from "../../src/hooks"
import { number, string } from "../constants"

const value = number
const lazyValue = () => string

const symbol = Symbol(string)
const lazySymbol = () => symbol

describe("useLazyRef", () => {
  test("should return its initial (lazy) value", () => {
    const { result } = renderHook(() => useLazyRef(value))
    const { result: resultLazy } = renderHook(() => useLazyRef(lazyValue))

    expect(result.current).toBe(number)
    expect(resultLazy.current).toBe(string)
  })

  test("should not change its value after subsequent renders", () => {
    const { rerender, result } = renderHook(() => useLazyRef(symbol))
    const { rerender: rerenderLazy, result: resultLazy } = renderHook(() =>
      useLazyRef(lazySymbol)
    )

    rerender()
    rerenderLazy()

    expect(result.current).toBe(symbol)
    expect(resultLazy.current).toBe(symbol)
  })
})
