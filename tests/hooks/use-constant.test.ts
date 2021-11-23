import { renderHook } from "@testing-library/react-hooks"
import * as assert from "uvu/assert"
import { useConstant } from "../../src/hooks/use-constant"
import { number, string } from "../constants"
import { describe } from "../helpers"

const value = number
const lazyValue = () => string

const symbol = Symbol(string)
const lazySymbol = () => symbol

describe("useConstant", (it) => {
  it("should return its initial (lazy) value", () => {
    const { result } = renderHook(() => useConstant(value))
    const { result: resultLazy } = renderHook(() => useConstant(lazyValue))

    assert.equal(result.current, number)
    assert.equal(resultLazy.current, string)
  })

  it("should not change its value after subsequent renders", () => {
    const { rerender, result } = renderHook(() => useConstant(symbol))
    const { rerender: rerenderLazy, result: resultLazy } = renderHook(() =>
      useConstant(lazySymbol)
    )

    rerender()
    rerenderLazy()

    assert.equal(result.current, symbol)
    assert.equal(resultLazy.current, symbol)
  })
})
