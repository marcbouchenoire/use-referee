import { isFunction, isSomething } from "../guards"
import type { Ref } from "../types"

/**
 * Apply a value to a ref.
 *
 * @param ref - The ref to apply.
 * @param value - The value to be applied.
 */
export function applyRef<T>(ref: Ref<T>, value: T) {
  if (isSomething(value)) {
    if (isFunction(ref)) {
      ref(value)
    } else if (isSomething(ref) && "current" in ref) {
      ref.current = value
    }
  }
}
