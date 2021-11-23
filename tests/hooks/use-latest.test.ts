import { renderHook } from "@testing-library/react-hooks"
import * as assert from "uvu/assert"
import { useLatest } from "../../src/hooks/use-latest"
import { number } from "../constants"
import { createRef, describe } from "../helpers"

describe("useLatest", (it) => {
  it("should return a ref that mutates when its given value changes", () => {
    const { result, rerender } = renderHook(({ value }) => useLatest(value), {
      initialProps: { value: 0 }
    })

    rerender({ value: number })

    assert.equal(result.current, createRef(number))
  })
})
