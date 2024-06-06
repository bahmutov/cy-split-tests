const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')
const path = require('path')

// TODO: add the "reset-spec.js" to the specs
// and always run it first
function changeSpecOrder(specs) {
  // we must deal with absolute file paths
  // put the reset spec first
  console.log('split spec order')
  specs.forEach((spec) => {
    console.log(spec)
  })

  return specs
}

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config, changeSpecOrder)
      // IMPORTANT: return the modified config object
      return config
    },
    baseUrl: 'http://localhost:8888',
    specPattern: 'cypress/e2e/**/*spec.js',
  },
})
