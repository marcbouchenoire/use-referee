import { MutableRefObject } from "react"
import { Test, suite } from "uvu"

type Describer = (test: Test) => Promise<void> | void

export function createRef<T>(value: T): MutableRefObject<T> {
  return {
    current: value
  }
}

export function describe(name: string, hook: Describer): void {
  const test = suite(name)
  hook(test)

  test.run()
}
