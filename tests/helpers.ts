import { MutableRefObject } from "react"

export function createRef<T>(value: T): MutableRefObject<T> {
  return {
    current: value
  }
}
