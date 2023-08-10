const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jvwuev',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://store.angulartraining.com',
    // can override the default timeout for commands
    // defaultCommandTimeout: 10000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // environment for cypress stuffs
    env: {
      standardUser: {
        email: "test@example.com",
        password: "pass!123"
      },
      adminUser: {
        email: "admin@example.com",
        password: "pass!123"
      },
    }
  },
})
