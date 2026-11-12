import assert from "node:assert/strict"
import test from "node:test"
import { fjord } from "../../src/fjord/index.mjs"

test("fjord trims", () => {
  assert.equal(fjord(" a "), "a")
})
