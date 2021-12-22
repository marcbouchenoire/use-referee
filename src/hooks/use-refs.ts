import { RefCallback, useCallback } from "react"
import { Ref } from "../types"
import { mergeRefs } from "../utils/merge-refs"

/**
 * Merge ref objects and callbacks into a single callback ref.
 *
 * @param refs - The refs to merge.
 * @returns A merged callback ref.
 *
 * @example
 *
 * ```jsx
 * const refs = useRefs(ref, forwardedRef)
 *
 * return <div ref={refs} />
 *
 * // ref: { current: <div /> }
 * // forwardedRef: { current: <div /> }
 * ```
 */
export function useRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return useCallback((value: T) => mergeRefs(value, ...refs), [refs])
}
