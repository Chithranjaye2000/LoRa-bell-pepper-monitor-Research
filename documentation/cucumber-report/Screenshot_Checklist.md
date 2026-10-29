# Screenshot checklist

Insert screenshots manually into the editable DOCX, then update its contents and page fields and re-export the PDF.
Keep figure numbers and captions consistent. Do not substitute another project’s images.
The report uses saved execution evidence from 20 October 2026. Date any new run separately.
Preserve the existing reports/cucumber-report.html before any execution, including dry runs.
A full default run currently contains the deliberate diagnostic failure. It is not a normal functional pass.

- [ ] Figure 01 — Package dependencies and scripts
  - Insert: Capture package.json in Visual Studio Code, showing pretest, test and dev plus @cucumber/cucumber and @playwright/test.
  - Purpose: Shows the actual npm entry points and automation dependency declarations.

- [ ] Figure 02 — Project folder structure
  - Insert: Capture the Visual Studio Code Explorer with features, tests, reports, cucumber.cjs and package.json expanded.
  - Purpose: Demonstrates the actual organisation of the automation framework.

- [ ] Figure 03 — Cucumber configuration
  - Insert: Capture cucumber.cjs in Visual Studio Code, including the directory creation, paths, import and format entries.
  - Purpose: Shows which files execute and where the HTML report is written.

- [ ] Figure 04 — Playwright browser initialisation
  - Insert: Capture the Given step and BASE_URL definitions in tests/step-definitions/dashboard.steps.js in Visual Studio Code.
  - Purpose: Demonstrates scenario browser creation and navigation to /login.

- [ ] Figure 05 — Reusable login helper
  - Insert: Capture tests/helpers/login.helper.js in Visual Studio Code with both exported functions visible.
  - Purpose: Shows shared form actions and the actual ID selectors.

- [ ] Figure 06 — Step definitions and assertions
  - Insert: Capture the validation and redirect assertions in tests/step-definitions/dashboard.steps.js in Visual Studio Code.
  - Purpose: Connects the Gherkin expectations to the implemented browser checks.

- [ ] Figure 07 — After hook and screenshot capture
  - Insert: Capture the After hook in tests/step-definitions/dashboard.steps.js in Visual Studio Code, including the failed guard, screenshot call, attachment and browser cleanup.
  - Purpose: Demonstrates capture before teardown and error handling that preserves the original failure.

- [ ] Figure 08 — Feature file scenarios
  - Insert: Capture features/dashboard.feature in Visual Studio Code with the feature name and scenario declarations visible; clearly identify the temporary diagnostic.
  - Purpose: Shows the exact implemented Gherkin scope without implying wider dashboard coverage.

- [ ] Figure 09 — Open the monitoring application
  - Insert: Capture the Chromium /login page with the heading and all login controls visible.
  - Purpose: Provides visual context for the login-page presence checks.

- [ ] Figure 10 — Login with valid details
  - Insert: Capture Chromium after demo login with the address bar showing / and the dashboard visible.
  - Purpose: Illustrates the tested route transition after the demo form submission.

- [ ] Figure 11 — Login with invalid email format
  - Insert: Capture Chromium after submitting invalid-email, with the invalid email field and any native validation prompt visible.
  - Purpose: Shows the browser-level rejection state for malformed email input.

- [ ] Figure 12 — Empty Login Form Validation
  - Insert: Capture Chromium after empty submission with both empty fields and the first invalid field visible.
  - Purpose: Provides visual context for the required-field validation checks.

- [ ] Figure 13 — Password Field Masking
  - Insert: Capture Chromium /login with DevTools Elements showing #auth-password and type="password"; the field may remain empty.
  - Purpose: Demonstrates the exact DOM property checked by the automated scenario.

- [ ] Figure 14 — Login Button Verification
  - Insert: Capture Chromium /login with the Log in button visible; include DevTools if documenting enabled state.
  - Purpose: Shows the submit control whose visibility, state and text are asserted.

- [ ] Figure 15 — Diagnostic failure attachment
  - Insert: Open reports/cucumber-report.html in a browser, expand the temporary scenario and capture the deliberate error and attached image together.
  - Purpose: Shows that the failed diagnostic retained the expected error and a real attachment.

- [ ] Figure 16 — Successful functional execution in the terminal
  - Insert: In a VS Code terminal, capture an actual completed functional-only run showing six scenarios passed. This terminal screenshot is not currently available; capture it only after performing a new run.
  - Purpose: Provides optional new terminal evidence for the functional subset. It must be dated separately from the saved run analysed here.

- [ ] Figure 17 — Final execution summary
  - Insert: Open the saved reports/cucumber-report.html in a browser and capture its summary showing six passed and one failed scenario. Preserve the diagnostic classification in the caption.
  - Purpose: Supports the exact totals of the saved full run without claiming an all-green suite.

- [ ] Figure 18 — Intentional failed execution in the terminal
  - Insert: Capture a new diagnostic-only run in a VS Code terminal showing the expected assertion message and failed count. No historical terminal capture is available.
  - Purpose: Documents the deliberate failure trigger; a future run is additional evidence, not the original saved execution.

- [ ] Figure 19 — Saved failure screenshot
  - Insert: Open the existing PNG under reports/screenshots in VS Code or an image viewer and capture the image tab with its filename visible.
  - Purpose: Shows the actual saved diagnostic page screenshot and its storage location.

- [ ] Figure 20 — Generated Cucumber HTML report
  - Insert: Open reports/cucumber-report.html in a browser and capture the feature details and expanded scenario results.
  - Purpose: Demonstrates the generated report layout and the link between readable scenarios and execution outcomes.

## Author details

- [ ] Fill Name, Training ID and Date on the cover.
- [ ] Update the Word table of contents and page fields after inserting images.
- [ ] Recheck tables, page breaks and captions in both output formats.