import { MutableRefObject, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export const usePrevious = <T>(value: T) => {
  const ref: MutableRefObject<T | undefined> = useRef()

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
