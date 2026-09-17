<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Rules

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
