# Handoff

Milestone m: incomplete. Gate 3 refused; no merges by this supervisor.

## Decisions — 2026-11-13

- Owner: coordinators run on `anthropic/claude-opus-5-5`; owner away until tomorrow.
- Supervisor started one coordinator for m, `milestone/m`, model `anthropic/claude-opus-5-5`, in separate clone `.bive-coordinator-m`. Launch failed before work: insufficient Anthropic credits. No alternative coordinator model authorized. No milestone completion/end logged.
- No coordinator merges, PR closures, owner-only authorization labels, or direct integration pushes, even for its own documentation/inviolable changes. Historical delegation comments cannot override role rules. No check waiver or JSON-default change approved; preserve behavior pending owner decision.
- Shared `docs/USAGE.md`: milestone m is sole writer; milestone n waits and rebases after m's reviewed change.
- Gate 1: proposed parse/format/export split rejected as underspecified. Require exact files, API/edge-case done-when criteria and tests for every issue, including exports, with one writer per shared file and at most 3 source files plus 1 test per session. Coordinator owns brief wording and routine independent-PR ordering. Onyx's 600-row table alone is no reason to split; Garnet's 40 tests exceed one session.
- Gate 2: coordinator must not take over after two failures. Require smaller independently tested briefs and return split for approval; no silent scope drop. For model/provider unavailability, use next canonical delegate model in `.bive/models.json` (after `opencode/beam-free`, `opencode-go/beam-free`), resolving local aliases. This does not authorize coordinator-model fallback.
- Gate 3: refuse #23's false completion claim. Formal approved-review queue for `milestone/m` was empty. No owner label applied or red gate bypassed. Supervisor qualification is not recorded here and must be established before merging.

## Completion evidence

Baseline integration `5961e4b`; Node v22.23.4; direct required-test commands:

| Issue | Evidence | State |
| --- | --- | --- |
| #2 lumen | Export present; required test passes | Complete on integration |
| #4 fjord | Export present; required test passes | Complete on integration |
| #6 raven | Export present; required test passes | Complete on integration |
| #8 sorrel | Export present; required main test missing; direct command fails | Incomplete |
| #10 basil | Export present; required test passes | Complete on integration |
| #12 maple | Export present; required test passes | Complete on integration |
| #14 dune | #15 `f521a1a`: direct test passes; skipped-CI commit, missing tests/check statuses | Blocked, not integrated |
| #16 garnet | #17 `5719fd9`: required main test missing; t03/t07 fail | Incomplete |
| #18 onyx | #19 `35eea38`: direct test passes; 600 unique table codes | Candidate, not integrated |
| #20 zephyr | #21 `7dbd9d9`: direct test passes | Candidate, not integrated |

Ten delivery issues, not seven. On Garnet, `node scripts/run-tests.mjs` reports t03/t07 failures then exits 0 at “12 of 40 test files run”. Green CI and “all files” reports are not completion evidence. Require uncapped enumeration, preservation of failure status, and runner regression coverage; resolve expected behavior rather than weaken assertions.

PR #22 inaccurately says all four PRs are approved; no formal reviews exist. Its missing-label failure is expected but inaccurate tracking must not merge. #15's historical post-label gate refusal log says authorization expired; current label does not waive absent CI. #23 lacks an accurate completion report and field report. Repository settings are merge-only, matching AGENTS.md.

## Resume / coordinator launch prompt

You are coordinator for milestone m, branch `milestone/m`, model `anthropic/claude-opus-5-5`, in your own clone `.bive-coordinator-m`. Read AGENTS.md, HANDOFF.md, ROADMAP.md and coordinator prompts. Never implement product code, merge/close PRs, apply authorization labels, or push integration/main. Verify the audit, submit exact remediation split/files at gate 1, then use delegates. Update tracking through reviewed coordinator PRs. Owner must restore Anthropic credits or explicitly select another coordinator model. Before gate 3 provide uncapped test evidence, all ten issue dispositions, privacy/compatibility/licence review, remaining owner decisions, and name-free field report. Obtain qualification, proper review, owner authorization and green checks before supervisor merges; do not claim completion while criteria remain unmet.
