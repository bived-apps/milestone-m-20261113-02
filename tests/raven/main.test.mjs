import assert from "node:assert/strict"
import test from "node:test"
import { raven } from "../../src/raven/index.mjs"

test("raven trims", () => {
  assert.equal(raven(" a "), "a")
})
