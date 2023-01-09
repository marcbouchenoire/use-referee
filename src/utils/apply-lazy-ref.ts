import type { MutableRefObject } from "react"
import { isFunction } from "../guards"
import type { Lazy } from "../types"

/**
 * Lazily apply a value to a ref.
 *
 * @param ref - The ref to apply.
 * @param value - The lazy value to be applied.
 */
export function applyLazyRef<T>(ref: MutableRefObject<T>, value: Lazy<T>) {
  ref.current = isFunction(value) ? value() : value

  return ref
}
