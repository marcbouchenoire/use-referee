import { MutableRefObject, useRef } from "react"
import { isFunction } from "../guards"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export const usePreviousRef = <T>(initialValue: T | (() => T)) => {
  const ref: MutableRefObject<T | null> = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (isFunction(initialValue)) {
      ref.current = initialValue()
    } else {
      ref.current = initialValue
    }
  })

  return ref.current
}
