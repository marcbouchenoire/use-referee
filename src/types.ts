import { LegacyRef, MutableRefObject, RefObject } from "react"

export type Unpack<T> = T extends (infer U)[] ? U : T

export type Lazy<T> = T | (() => T)

export type Ref<T> = NonNullable<
  MutableRefObject<T> | Exclude<LegacyRef<T>, string | RefObject<T>>
>

export type PlainFunction<P = any, R = any> = (...args: P[]) => R
