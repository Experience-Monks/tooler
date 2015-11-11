#!/usr/bin/env node
require('../')(function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})