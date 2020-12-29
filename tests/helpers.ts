import { MutableRefObject } from "react"

export const createRef = <T>(value: T): MutableRefObject<T> => ({
  current: value
})
