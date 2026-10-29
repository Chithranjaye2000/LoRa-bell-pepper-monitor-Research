# Bell Pepper Monitor

## Login automation tests

The tests use Cucumber.js, Playwright, and JavaScript ES modules. They cover opening
the login page, demo login, invalid email format, empty required fields, password
masking, and login button visibility and availability.

1. Install the project dependencies with `npm install` if needed.
2. Install Chromium with `npx playwright install chromium` if it is not already installed.
3. Start the application with `npm run dev` and keep it running at `http://localhost:5173/`.
4. In a second VS Code terminal, run `npm test`.

The browser stays visible (`headless: false`) and actions are slowed by 700 ms.
Each scenario keeps its browser open for 3 seconds before closing it.
To check step matching without opening a browser, run `npm test -- --dry-run`.

If another application already uses port 5173, start this project on another port,
for example `npm run dev -- --port 5174 --strictPort`. Then set the test URL in
PowerShell before running the tests:

```powershell
$env:BASE_URL = 'http://localhost:5174/'
npm test
Remove-Item Env:BASE_URL
```

If PowerShell's `npm` command points to a missing `npm-cli.js`, try `npm.cmd test`
(and `npm.cmd run dev` for the server).

- Feature scenarios: `features/dashboard.feature`
- Step definitions and failure cleanup: `tests/step-definitions/dashboard.steps.js`
- Reusable form actions: `tests/helpers/login.helper.js`
- HTML report: `reports/cucumber-report.html` (replaced on each run)
- Failure screenshots: `reports/screenshots/<scenario>-<timestamp>-<unique-id>.png`

The report directory is created automatically. Screenshots are saved and attached
to the HTML report only when a scenario fails and its page is available. Passing
scenarios do not create screenshots. Screenshots from earlier failures remain on disk.
If the browser cannot start, there is no page to capture; the original failure is
still reported. Screenshot errors are logged without hiding the original failure.

The application uses demo authentication: a successful login test checks form
interaction and dashboard redirection, not real authentication security.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
