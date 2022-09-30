const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    watchForFileChanges: false,
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 0,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 0,
    }
  },
});
