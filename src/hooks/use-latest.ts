import { MutableRefObject, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

/**
 * Return the latest value of a variable as a ref.
 *
 * @param value -.The variable to get the latest value of.
 * @returns The latest value as a ref.
 *
 * @example
 *
 * ```js
 * const [state, setState] = useState(false)
 * const latest = useLatest(state)
 *
 * // latest: { current: false }
 *
 * setState(true)
 *
 * useEffect(() => {
 *   // latest: { current: true }
 * }, [])
 * ```
 */
export function useLatest<T>(value: T) {
  const ref: MutableRefObject<T> = useRef(value)

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref
}
