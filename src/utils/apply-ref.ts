import { isFunction, isSomething } from "../guards"
import { Ref } from "../types"

export function applyRef<T>(ref: Ref<T>, value: T) {
  if (isSomething(value)) {
    if (isFunction(ref)) {
      ref(value)
    } else if (isSomething(ref)) {
      ref.current = value
    }
  }
}
