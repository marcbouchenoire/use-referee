import { PlainFunction, Unpack } from "./types"

export const isFunction = <T extends PlainFunction>(
  value: T | unknown
): value is PlainFunction<Unpack<Parameters<T>>, ReturnType<T>> => {
  return value instanceof Function
}
