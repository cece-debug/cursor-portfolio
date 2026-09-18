<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Rules

## Context7 Code Review (always-on)

After every code change — new features, refactors, bug fixes, or file edits — always compare the result against current library and framework documentation using the context7 MCP server. This rule applies on every machine, in every session, with no exceptions.

### Workflow

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

### Rules

- Never skip the context7 check — it runs on every change, no exceptions.
- Always resolve the library ID first with `resolve-library-id` before querying docs.
- Use specific, focused queries (function name, API path, config key) — avoid broad searches.
- If a library has no context7 match, note this explicitly and move on.
- If a change touches multiple libraries, run one context7 query per library.

## Project-level skills (always committed)

- All skills live in `.opencode/skills/<name>/SKILL.md` — project-level only, never machine-specific.
- Whenever any change, feature, or fix is committed, skill files must be included in that same commit: check `git status` for modified `.opencode/skills/**/SKILL.md` (or new skill folders) and stage them along with the code they accompany.
- New skills are added as project-level skills in `.opencode/skills/`, never in global config.
- Skill changes travel with the repo: since `.opencode/skills/` is committed, they run on every machine that clones this repo.

## Adding routes and features

Before writing code for a new route, page, layout, or navigation change, consult the context7 MCP server (`/vercel/next.js`) for current App Router conventions — page/layout file conventions, `Link` usage, and metadata. Also review the relevant guide under `node_modules/next/dist/docs/`, since this Next.js version has breaking changes relative to older releases. Heed any deprecation notices.

Use `next/link`'s `Link` component for internal navigation (it enables prefetching and client-side transitions) rather than bare `<a>` tags, unless the link is an external URL opened in a new tab.

## Verifying work before pushing

Before considering any change done — and always before pushing — verify the goal of the initial user query was reached:

1. Re-read the user's request and confirm each requirement is actually implemented, not just partially addressed.
2. Verify the code works: run `npm run build` (and lint/typecheck if configured) and confirm the affected routes appear in the build output.
3. List every file that was touched or viewed during the session.
4. Summarize what was done, grounding the explanation in current documentation: use the context7 MCP server for library/framework rules and conventions, and the tavily MCP server (search/extract/research) for anything requiring up-to-date external information.
5. Use that grounding to correct stale assumptions rather than merely restating instructions.
