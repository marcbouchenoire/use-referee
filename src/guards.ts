import type { PlainFunction, Unpack } from "./types"

/**
 * Whether the value is a function.
 *
 * @param value - The value to check.
 */
export function isFunction<T extends PlainFunction>(
  value: T | unknown
): value is PlainFunction<Unpack<Parameters<T>>, ReturnType<T>> {
  return value instanceof Function
}

/**
 * Whether the value is not undefined or null.
 *
 * @param value - The value to check.
 */
export function isSomething<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}
