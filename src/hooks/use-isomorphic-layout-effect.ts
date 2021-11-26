import { useEffect, useLayoutEffect } from "react"

export function createIsomorphicFunction<T>(server: T, client: T) {
  return typeof window !== "undefined" ? client : server
}

export const useIsomorphicLayoutEffect = createIsomorphicFunction(
  useEffect,
  useLayoutEffect
)
