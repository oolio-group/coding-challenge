process.env.NODE_ENV = 'test'

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')()

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null}
require.extensions['.png'] = function () {return null}
require.extensions['.jpg'] = function () {return null}

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const exposedProperties = ['window', 'navigator', 'document']

const { window } = new JSDOM(`...`)
const { document } = (new JSDOM(`...`)).window
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

// global.navigator = {
//   userAgent: 'node.js'
// };

// documentRef = document;  //eslint-disable-line no-undef