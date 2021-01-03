import { Ref } from "../types"
import { applyRef } from "./apply-ref"

export function mergeRefs<T>(value: T, ...refs: Ref<T>[]) {
  for (const ref of refs) {
    applyRef(ref, value)
  }
}
