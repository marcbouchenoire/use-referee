import * as assert from "uvu/assert"
import { applyLazyRef } from "../../src/utils/apply-lazy-ref"
import { number, string } from "../constants"
import { createRef, describe } from "../helpers"

const value = number
const lazyValue = () => string

describe("applyLazyRef", (it) => {
  it("should mutate a ref into a given (lazy) value", () => {
    const ref = createRef<number | string>(0)

    assert.equal(applyLazyRef(ref, value), createRef(number))
    assert.equal(applyLazyRef(ref, lazyValue), createRef(string))
  })
})
