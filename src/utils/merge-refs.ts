import { Ref } from "../types"
import { applyRef } from "./apply-ref"

/**
 * Merge ref objects and callbacks into a single callback ref.
 *
 * @param value - The value to be applied.
 * @param refs - The refs to merge.
 */
export function mergeRefs<T>(value: T, ...refs: Ref<T>[]) {
  for (const ref of refs) {
    applyRef(ref, value)
  }
}
