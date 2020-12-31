import { PlainFunction, Unpack } from "./types"

export const isFunction = <T extends PlainFunction>(
  value: T | unknown
): value is PlainFunction<Unpack<Parameters<T>>, ReturnType<T>> => {
  return value instanceof Function
}

export const isSomething = <T>(value: T): value is NonNullable<T> => {
  return value !== undefined && value !== null
}
