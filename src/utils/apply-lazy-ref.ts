import { MutableRefObject } from "react"
import { isFunction } from "../guards"
import { Lazy } from "../types"

export function applyLazyRef<T>(ref: MutableRefObject<T>, value: Lazy<T>) {
  if (isFunction(value)) {
    ref.current = value()
  } else {
    ref.current = value
  }

  return ref
}
