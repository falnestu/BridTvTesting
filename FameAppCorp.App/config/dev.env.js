'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASEURL: '""',
  SIGNALR_BASEURL: '"http://localhost:64449"'
})
