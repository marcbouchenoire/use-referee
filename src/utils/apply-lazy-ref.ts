import { MutableRefObject } from "react"
import { isFunction } from "../guards"
import { Lazy } from "../types"

export function applyLazyRef<T>(ref: MutableRefObject<T>, value: Lazy<T>) {
  ref.current = isFunction(value) ? value() : value

  return ref
}
