import { MutableRefObject, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

/**
 * Return the previous value of a variable.
 *
 * @param value - The variable to get the previous value of.
 * @returns The previous value.
 *
 * @example
 *
 * ```js
 * const [state, setState] = useState(false)
 * const previous = usePrevious(state)
 *
 * // previous: undefined
 *
 * setState(true)
 *
 * // previous: false
 *
 * setState(false)
 *
 * // previous: true
 * ```
 */
export function usePrevious<T>(value: T) {
  const ref: MutableRefObject<T | undefined> = useRef()

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
