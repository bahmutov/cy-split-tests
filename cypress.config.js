const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the modified config object
      return config
    },
    baseUrl: 'http://localhost:8888',
    specPattern: 'cypress/e2e/**/*spec.js',
  },
})
