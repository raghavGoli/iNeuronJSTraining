const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    reportFilename: "[status]_[datetime]-[name]-report",
    charts: true,
    reportTitle: 'Raghav Cypress Automation Report-ELECTRON HEADLESS',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen:true,
    code:false,
    timestamp: "longDate",
    overwrite:false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    watchForFileChanges: true,
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 1,
    }
  },
});
