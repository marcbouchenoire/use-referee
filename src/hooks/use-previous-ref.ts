import { MutableRefObject, useRef } from "react"
import { Lazy } from "../types"
import { applyLazyRef } from "../utils"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export const usePreviousRef = <T>(initialValue: Lazy<T>) => {
  const ref: MutableRefObject<T | null> = useRef(null)

  useIsomorphicLayoutEffect(() => {
    applyLazyRef(ref, initialValue)
  })

  return ref.current
}
