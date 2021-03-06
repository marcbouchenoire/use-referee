import { renderHook } from "@testing-library/react-hooks"
import { useConstant } from "../../src/hooks/use-constant"
import { number, string } from "../constants"

const value = number
const lazyValue = () => string

const symbol = Symbol(string)
const lazySymbol = () => symbol

describe("useConstant", () => {
  test("should return its initial (lazy) value", () => {
    const { result } = renderHook(() => useConstant(value))
    const { result: resultLazy } = renderHook(() => useConstant(lazyValue))

    expect(result.current).toBe(number)
    expect(resultLazy.current).toBe(string)
  })

  test("should not change its value after subsequent renders", () => {
    const { rerender, result } = renderHook(() => useConstant(symbol))
    const { rerender: rerenderLazy, result: resultLazy } = renderHook(() =>
      useConstant(lazySymbol)
    )

    rerender()
    rerenderLazy()

    expect(result.current).toBe(symbol)
    expect(resultLazy.current).toBe(symbol)
  })
})
