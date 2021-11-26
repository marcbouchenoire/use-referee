import { useEffect, useLayoutEffect } from "react"
import * as assert from "uvu/assert"
import { createIsomorphicFunction } from "../../src/hooks/use-isomorphic-layout-effect"
import { describe, mock } from "../helpers"

describe("createIsomorphicFunction", (it) => {
  it("should return the server argument if window doesn't exist", async () => {
    const useIsomorphicLayoutEffect = createIsomorphicFunction(
      useEffect,
      useLayoutEffect
    )

    assert.equal(useIsomorphicLayoutEffect, useEffect)
  })

  it("should return the client argument if window exists", async () => {
    const restoreWindow = mock(global, "window", "")
    const useIsomorphicLayoutEffect = createIsomorphicFunction(
      useEffect,
      useLayoutEffect
    )

    assert.equal(useIsomorphicLayoutEffect, useLayoutEffect)

    restoreWindow()
  })
})
