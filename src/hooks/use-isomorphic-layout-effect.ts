import { useEffect, useLayoutEffect } from "react"

/**
 * Create a different value depending on if it's executed on the server or the client.
 *
 * @param server - The value on the server.
 * @param client - The value on the client.
 */
export function createIsomorphicFunction<T>(server: T, client: T) {
  return typeof window === "undefined" ? server : client
}

/**
 * Run a layout effect in the browser and a normal effect on the server.
 *
 * @param effect - A function that can return a cleanup function.
 * @param [dependencies] - If present, the effect will only activate if the values in the list change.
 */
export const useIsomorphicLayoutEffect = createIsomorphicFunction(
  useEffect,
  useLayoutEffect
)
