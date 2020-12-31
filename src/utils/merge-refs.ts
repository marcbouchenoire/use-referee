import { Ref } from "../types"
import { applyRef } from "./apply-ref"

export const mergeRefs = <T>(value: T, ...refs: Ref<T>[]) => {
  for (const ref of refs) {
    applyRef(ref, value)
  }
}
