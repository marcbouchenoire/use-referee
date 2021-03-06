import { applyLazyRef } from "../../src/utils/apply-lazy-ref"
import { number, string } from "../constants"
import { createRef } from "../helpers"

const value = number
const lazyValue = () => string

describe("applyLazyRef", () => {
  test("should mutate a ref into a given (lazy) value", () => {
    const ref = createRef<number | string>(0)

    expect(applyLazyRef(ref, value)).toStrictEqual(createRef(number))
    expect(applyLazyRef(ref, lazyValue)).toStrictEqual(createRef(string))
  })
})
