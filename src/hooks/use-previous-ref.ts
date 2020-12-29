import { MutableRefObject, useRef } from "react"
import { Lazy } from "../types"
import { applyLazyRef } from "../utils"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export const usePreviousRef = <T>(value: Lazy<T>) => {
  const ref: MutableRefObject<T | undefined> = useRef()

  useIsomorphicLayoutEffect(() => {
    applyLazyRef(ref, value)
  }, [value])

  return ref.current
}
