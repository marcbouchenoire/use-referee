import { MutableRefObject, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export const useLatestRef = <T>(value: T) => {
  const ref: MutableRefObject<T> = useRef(value)

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref
}
