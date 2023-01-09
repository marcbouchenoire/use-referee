import type { MutableRefObject } from "react"
import { useRef } from "react"
import type { Lazy } from "../types"
import { applyLazyRef } from "../utils/apply-lazy-ref"

/**
 * Return a value that will never update or mutate.
 *
 * @param value - The initial (lazy) value.
 * @returns The constant value.
 *
 * @example
 *
 * ```js
 * const id = useConstant(() => uuid())
 *
 * // id: "123e4567-e89b-12d3-a456-426614174000"
 * ```
 */
export function useConstant<T>(value: Lazy<T>) {
  const ref: MutableRefObject<T | undefined> = useRef(undefined)

  if (ref.current === undefined) {
    applyLazyRef(ref, value)
  }

  return (ref as MutableRefObject<T>).current
}
