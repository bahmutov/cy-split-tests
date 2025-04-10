const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cy-grep
const cypressGrep = require('@bahmutov/cy-grep/src/plugin')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    env: { grepFilterSpecs: true, grepOmitFiltered: true },
    setupNodeEvents(on, config) {
      // configure the grep and the split plugins
      // to work together

      // IMPORTANT: return the modified config object
      return config
    },
    baseUrl: 'http://localhost:8888',
    specPattern: 'cypress/e2e/**/*spec.js',
  },
})
