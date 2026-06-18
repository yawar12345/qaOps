# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions-demo.spec.js >> assertions that FAIL (expected) >> wrong title -> assertion fails
- Location: tests\assertions-demo.spec.js:35:3

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Selenium/
Received string:  "Fast and reliable end-to-end testing for modern web apps | Playwright"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Fast and reliable end-to-end testing for modern web apps | Playwright"

```

```yaml
- region "Skip to main content":
  - link "Skip to main content":
    - /url: "#__docusaurus_skipToContent_fallback"
- navigation "Main":
  - link "Playwright logo Playwright":
    - /url: /
    - img "Playwright logo"
    - text: Playwright
  - link "Docs":
    - /url: /docs/intro
  - link "MCP":
    - /url: /mcp/introduction
  - link "CLI":
    - /url: /agent-cli/introduction
  - link "API":
    - /url: /docs/api/class-playwright
  - button "Node.js"
  - link "GitHub repository":
    - /url: https://github.com/microsoft/playwright
  - link "Discord server":
    - /url: https://aka.ms/playwright/discord
  - button "Switch between dark and light mode (currently system mode)"
  - button "Search (Control+k)": Search Ctrl K
- banner:
  - heading "Playwright enables reliable web automation for testing, scripting, and AI agents." [level=1]
  - paragraph:
    - text: One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for
    - link "TypeScript":
      - /url: https://playwright.dev/docs/intro
    - text: ","
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - link "Get started":
    - /url: /docs/intro
  - link "Star microsoft/playwright on GitHub":
    - /url: https://github.com/microsoft/playwright
    - text: Star
  - link "91k+ stargazers on GitHub":
    - /url: https://github.com/microsoft/playwright/stargazers
    - text: 91k+
- main:
  - heading "Playwright Test" [level=3]
  - paragraph: Full-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.
  - code: npm init playwright@latest
  - link "Testing documentation":
    - /url: /docs/intro
  - heading "Playwright CLI" [level=3]
  - paragraph: Token-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.
  - code: npm i -g @playwright/cli@latest
  - link "CLI documentation":
    - /url: /docs/getting-started-cli
  - heading "Playwright MCP" [level=3]
  - paragraph: Model Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.
  - code: npx @playwright/mcp@latest
  - link "MCP documentation":
    - /url: /docs/getting-started-mcp
  - heading "Built for testing" [level=2]
  - heading "Auto-wait and web-first assertions" [level=4]
  - paragraph: Playwright waits for elements to be actionable before performing actions. Assertions automatically retry until conditions are met. No artificial timeouts, no flaky tests.
  - heading "Test isolation" [level=4]
  - paragraph: Each test gets a fresh browser context — equivalent to a brand new browser profile. Full isolation with near-zero overhead. Save authentication state once and reuse it across tests.
  - heading "Resilient locators" [level=4]
  - paragraph:
    - text: "Find elements with selectors that mirror how users see the page:"
    - code: getByRole
    - text: ","
    - code: getByLabel
    - text: ","
    - code: getByPlaceholder
    - text: ","
    - code: getByTestId
    - text: . No brittle CSS paths.
  - heading "Parallelism and sharding" [level=4]
  - paragraph: Tests run in parallel by default across all configured browsers. Shard across multiple machines for faster CI. Full cross-browser coverage on every commit.
  - heading "Built for AI agents" [level=2]
  - heading "Accessibility snapshots, not screenshots" [level=4]
  - paragraph: Agents interact with pages through structured accessibility trees — element roles, names, and refs. Deterministic and unambiguous, no vision models required.
  - heading "MCP server" [level=4]
  - paragraph:
    - text: Drop-in
    - link "Model Context Protocol":
      - /url: https://modelcontextprotocol.io
    - text: server for VS Code, Cursor, Claude Desktop, Windsurf, and any MCP client. Full browser control through standard tool calls.
  - heading "CLI for coding agents" [level=4]
  - paragraph: Token-efficient command-line interface with installable skills. Purpose-built for Claude Code, GitHub Copilot, and similar coding agents that need to balance browser automation with large codebases.
  - heading "Session monitoring" [level=4]
  - paragraph: Visual dashboard with live screencast previews of all running browser sessions. Click any session to zoom in and take control.
  - heading "Powerful tooling" [level=2]
  - heading "Test generator" [level=4]:
    - link "Test generator":
      - /url: docs/codegen
  - paragraph: Record your actions in the browser and Playwright writes the test code. Generate assertions from the recording toolbar. Pick locators by clicking on elements.
  - heading "Trace Viewer" [level=4]:
    - link "Trace Viewer":
      - /url: docs/trace-viewer-intro
  - paragraph: Full timeline of test execution with DOM snapshots, network requests, console logs, and screenshots at every step. Investigate failures without re-running.
  - heading "VS Code extension" [level=4]:
    - link "VS Code extension":
      - /url: docs/getting-started-vscode
  - paragraph: Run, debug, and generate tests directly in the editor. Set breakpoints, live-inspect locators in the browser, and view full execution traces in the sidebar.
  - img "Chromium, Firefox, WebKit"
  - paragraph:
    - text: Any browser. Any platform. Chromium, Firefox, and WebKit on Linux, macOS, and Windows. Headless and headed. Also available for
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - heading "Chosen by companies and open source projects" [level=2]
  - list:
    - listitem:
      - link "VS Code":
        - /url: https://code.visualstudio.com
        - img "VS Code"
    - listitem:
      - link "Bing":
        - /url: https://bing.com
        - img "Bing"
    - listitem:
      - link "Outlook":
        - /url: https://outlook.com
        - img "Outlook"
    - listitem:
      - link "Disney+ Hotstar":
        - /url: https://www.hotstar.com/
        - img "Disney+ Hotstar"
    - listitem:
      - link "Material UI":
        - /url: https://github.com/mui-org/material-ui
        - img "Material UI"
    - listitem:
      - link "ING":
        - /url: https://github.com/ing-bank/lion
        - img "ING"
    - listitem:
      - link "Adobe":
        - /url: https://github.com/adobe/spectrum-web-components
        - img "Adobe"
    - listitem:
      - link "React Navigation":
        - /url: https://github.com/react-navigation/react-navigation
        - img "React Navigation"
    - listitem:
      - link "Accessibility Insights":
        - /url: https://accessibilityinsights.io/
        - img "Accessibility Insights"
- contentinfo:
  - text: Learn
  - list:
    - listitem:
      - link "Getting started":
        - /url: /docs/intro
    - listitem:
      - link "Playwright Training(opens in new tab)":
        - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
        - text: Playwright Training
        - img "(opens in new tab)"
    - listitem:
      - link "Learn Videos":
        - /url: /community/learn-videos
    - listitem:
      - link "Feature Videos":
        - /url: /community/feature-videos
  - text: Community
  - list:
    - listitem:
      - link "Stack Overflow(opens in new tab)":
        - /url: https://stackoverflow.com/questions/tagged/playwright
        - text: Stack Overflow
        - img "(opens in new tab)"
    - listitem:
      - link "Discord(opens in new tab)":
        - /url: https://aka.ms/playwright/discord
        - text: Discord
        - img "(opens in new tab)"
    - listitem:
      - link "Twitter(opens in new tab)":
        - /url: https://twitter.com/playwrightweb
        - text: Twitter
        - img "(opens in new tab)"
    - listitem:
      - link "LinkedIn(opens in new tab)":
        - /url: https://www.linkedin.com/company/playwrightweb
        - text: LinkedIn
        - img "(opens in new tab)"
  - text: More
  - list:
    - listitem:
      - link "GitHub(opens in new tab)":
        - /url: https://github.com/microsoft/playwright
        - text: GitHub
        - img "(opens in new tab)"
    - listitem:
      - link "YouTube(opens in new tab)":
        - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
        - text: YouTube
        - img "(opens in new tab)"
    - listitem:
      - link "Blog(opens in new tab)":
        - /url: https://dev.to/playwright
        - text: Blog
        - img "(opens in new tab)"
    - listitem:
      - link "Ambassadors":
        - /url: /community/ambassadors
    - listitem:
      - link "Microsoft Privacy Statement(opens in new tab)":
        - /url: https://go.microsoft.com/fwlink/?LinkId=521839
        - text: Microsoft Privacy Statement
        - img "(opens in new tab)"
  - text: Copyright © 2026 Microsoft
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | /**
  5  |  * Demo: passing AND failing assertions side by side.
  6  |  *
  7  |  * The "PASS" tests assert things that are true on https://playwright.dev.
  8  |  * The "FAIL" tests assert things that are false — but each one calls
  9  |  * test.fail() first, which tells Playwright the failure is EXPECTED.
  10 |  * That way you can see real failing assertions run while CI stays green.
  11 |  *
  12 |  * Remove test.fail() from any of the failing tests to watch it turn red.
  13 |  */
  14 | 
  15 | test.describe('assertions that PASS', () => {
  16 |   test('title contains "Playwright"', async ({ page }) => {
  17 |     await page.goto('/');
  18 |     await expect(page).toHaveTitle(/Playwright/); // true -> passes
  19 |   });
  20 | 
  21 |   test('hero heading is visible', async ({ page }) => {
  22 |     await page.goto('/');
  23 |     await expect(
  24 |       page.getByRole('heading', { level: 1, name: /enables reliable web automation/i }),
  25 |     ).toBeVisible(); // true -> passes
  26 |   });
  27 | 
  28 |   test('"Get started" link exists', async ({ page }) => {
  29 |     await page.goto('/');
  30 |     await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible(); // true -> passes
  31 |   });
  32 | });
  33 | 
  34 | test.describe('assertions that FAIL (expected)', () => {
  35 |   test('wrong title -> assertion fails', async ({ page }) => {
  36 |     test.fail(); // Playwright expects this test to fail
  37 |     await page.goto('/');
> 38 |     await expect(page).toHaveTitle(/Selenium/); // false -> fails as expected
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  39 |   });
  40 | 
  41 |   test('non-existent element -> assertion fails', async ({ page }) => {
  42 |     test.fail();
  43 |     await page.goto('/');
  44 |     await expect(
  45 |       page.getByRole('button', { name: 'This button does not exist' }),
  46 |     ).toBeVisible(); // never found -> fails as expected
  47 |   });
  48 | 
  49 |   test('wrong URL after navigation -> assertion fails', async ({ page }) => {
  50 |     test.fail();
  51 |     await page.goto('/');
  52 |     await page.getByRole('link', { name: 'Get started' }).click();
  53 |     await expect(page).toHaveURL(/.*some-page-that-does-not-exist/); // false -> fails as expected
  54 |   });
  55 | });
  56 | 
```