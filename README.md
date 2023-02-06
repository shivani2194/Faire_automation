
1. **IDE** - VS Code: Smart IDE with built in intelliSense and offers integrations to versioning and formatting tools
2. **Package Manager** - NPM: The most comprehensive online repository for the Node.js JavaScript runtime environment
3. **Automation tool**- Cypress: A versatile and always evolving automation tool which detects flakiness, describes errors precicely and can be easily integrated to expand test horizon
4. **Programming language**-Java script: An extremely powerful yet light weight coding language
5. **Reporting tool**- Mocha awesome: A very simple, clean and reliable reporting tool
6. **ReadMe Generator**- Dillinger.io: A very handy read me formatting tool to generate clean and consice read me file

## Some Insights on the automation tool - Cypress

- **Flake Detection**: Discover and diagnose unreliable tests with Cypress Cloud's Flaky test management
- **Smart Orchestration**: Once you're set up to record to Cypress Cloud, easily parallelize your test suite, rerun failed specs first with Spec Prioritization, and cancel test runs on failures with Auto Cancellation for tight feedback loops
- **Cross browser Testing**: Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline
- **Automatic Waiting**: No need to add waits or sleeps to tests. Cypress automatically waits for commands and assertions before moving on. No more async hell
- **Time Travel**: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step
- **Test Isolation**- No need to clear cookies and cache, cypress automatically takes care of it after execution of each test block in its latest release version 12.0.0 which we will be using in the repository

# Project Structure - POM

**Each test is divided into two parts** 

- We will be following a hybrid POM Structure where each test will have its page
- Each page will have its class containing actions inside a class and locators inside an object

# Folder Structure

**Cypress**

**Integration**: Contains test files
**Pages**: Contains the pages for each test file
**reports**: Contains report for every run
**Support**: Contains a support file for globally used actions (Command.js)
**Fixtures**: Contains images

# Clone repo or download foler, change directory(if cloning repo in a folder) and install packages:

```sh
gh repo clone shivani2194/faire
cd faire 
npm install
```

Open Cypress

```sh
npm run cy:open
```

If packages are not installed, use:

```sh
npx cypress open
```

Open Cypress headless mode

```sh
npm run cy:run
```
For gerenrating Mocah-awesome report:

```sh
npx cypress run --headless --spec cypress/e2e/"**spec.cy.js"
```
# Notes on report-ananlysis:

- Use "headed" flag should you need to run app under test on headed mode
- A reports folder would be created and a generated report would be saved in the folder specified
- Copy the path of the report and paste the link in the browser to monitor the report with UI
- Videos and screenshots would be uploaded in the videos folder and mochawesome-report/ respectively


