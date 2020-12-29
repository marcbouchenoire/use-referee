import { MutableRefObject, useRef } from "react"
import { isFunction } from "../guards"

export const useLazyRef = <T>(initialValue: T | (() => T)) => {
  const ref: MutableRefObject<T | null> = useRef(null)

  if (ref.current === null) {
    if (isFunction(initialValue)) {
      ref.current = initialValue()
    } else {
      ref.current = initialValue
    }
  }

  return ref.current
}
