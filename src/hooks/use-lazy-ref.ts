import { MutableRefObject, useRef } from "react"
import { Lazy } from "../types"
import { applyLazyRef } from "../utils"

export const useLazyRef = <T>(initialValue: Lazy<T>) => {
  const ref: MutableRefObject<T | null> = useRef(null)

  if (ref.current === null) {
    applyLazyRef(ref, initialValue)
  }

  return ref.current
}
