import { RefCallback, useCallback } from "react"
import { Ref } from "../types"
import { mergeRefs } from "../utils"

export function useRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return useCallback((value: T) => mergeRefs(value, ...refs), [refs])
}
