---
name: context7-code-review
description: Use ALWAYS after any code change to verify the change matches current library/framework conventions via context7. Triggers on every edit, refactor, feature addition, or bug fix to ensure repeatable code quality and standardized patterns.
---

# Context7 Code Review

After every code change — new features, refactors, bug fixes, or file edits — always compare the result against current library and framework documentation using the context7 MCP server.

## Workflow

1. **Identify changed files** — Run `git diff` or `git status` to list modified files.
2. **Resolve library IDs** — For each changed file, resolve the relevant library ID via the context7 MCP server (e.g. `nextjs`, `react`, `tailwindcss`, `prisma`).
3. **Fetch current documentation** — Query context7 for the exact API, pattern, or convention your code uses. Use specific queries: function names, configuration keys, or patterns — not broad topic searches.
4. **Compare** — Check the code change against the fetched documentation for:
   - API correctness: deprecated APIs, removed methods, changed signatures.
   - Pattern adherence: how the library recommends the feature be implemented.
   - Configuration accuracy: correct config shapes, valid option values.
   - Security best practices documented for the library.
5. **Fix if needed** — If the code deviates from current conventions, edit it to match the library's documented approach.
6. **Log the review** — At the end of the task, briefly state which libraries were checked and what, if anything, was corrected.

## Rules

- Never skip the context7 check — it runs on every change, no exceptions.
- Always resolve the library ID first with `resolve-library-id` before querying docs.
- Use specific, focused queries (function name, API path, config key) — avoid broad searches.
- If a library has no context7 match, note this explicitly and move on.
- If a change touches multiple libraries, run one context7 query per library.

## Example

A change to a Next.js page triggers:
- Resolve `/vercel/next.js`
- Query: "app router page layout conventions"
- Compare the written code against returned docs
- Correct any deprecated patterns (e.g. old `next/image` usage)
