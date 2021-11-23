import { renderHook } from "@testing-library/react-hooks"
import * as assert from "uvu/assert"
import { usePrevious } from "../../src/hooks/use-previous"
import { number } from "../constants"
import { describe } from "../helpers"

describe("usePrevious", (it) => {
  it("should return its previous value", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 }
    })

    assert.type(result.current, "undefined")

    rerender({ value: number })

    assert.equal(result.current, 0)

    rerender()

    assert.equal(result.current, number)

    rerender()

    assert.equal(result.current, number)
  })
})
