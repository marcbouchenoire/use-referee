import { MutableRefObject } from "react"

export type Unpack<T> = T extends (infer U)[] ? U : T

export type Lazy<T> = T | (() => T)

export type Ref<T> = CallbackRef<T> | MutableRefObject<T>

export type CallbackRef<T> = (value: T | null) => void

export type PlainFunction<P = any, R = any> = (...args: P[]) => R
