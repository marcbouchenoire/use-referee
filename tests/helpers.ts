import { MutableRefObject } from "react"
import { Test, suite } from "uvu"

type Describer = (test: Test) => Promise<void> | void

export function createRef<T>(value: T): MutableRefObject<T> {
  return {
    current: value
  }
}

export function mock<T>(object: T, name: keyof T, mock: any = undefined) {
  const origin = object[name]

  object[name] = mock

  return () => {
    object[name] = origin
  }
}

export function describe(name: string, hook: Describer): void {
  const test = suite(name)
  hook(test)

  test.run()
}
