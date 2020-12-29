import { MutableRefObject, useRef } from "react"
import { Lazy } from "../types"
import { applyLazyRef } from "../utils"

export const useLazyRef = <T>(value: Lazy<T>) => {
  const ref: MutableRefObject<T | undefined> = useRef(undefined)

  if (ref.current === undefined) {
    applyLazyRef(ref, value)
  }

  return ref.current
}
