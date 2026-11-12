import assert from "node:assert/strict"
import test from "node:test"
import { onyx } from "../../src/onyx/index.mjs"

test("onyx trims", () => {
  assert.equal(onyx(" a "), "a")
})
