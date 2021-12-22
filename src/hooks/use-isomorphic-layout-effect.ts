import { useEffect, useLayoutEffect } from "react"

/**
 * Create a different value depending on if it's executed on the server or the client.
 *
 * @param server - The value on the server.
 * @param client - The value on the client.
 */
export function createIsomorphicFunction<T>(server: T, client: T) {
  return typeof window !== "undefined" ? client : server
}

export const useIsomorphicLayoutEffect = createIsomorphicFunction(
  useEffect,
  useLayoutEffect
)
