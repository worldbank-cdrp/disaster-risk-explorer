#!/usr/bin/env node

var fs = require('fs')
var replacement = JSON.parse(fs.readFileSync('replacement.json'))
var retrofit = JSON.parse(fs.readFileSync('retrofit.json'))

// replacement has more options, iterate over that
// this mutates the object in place
Object.keys(replacement).forEach(k => {
  if (retrofit[k]) {
    replacement[k].retrofit = retrofit[k].retrofit
  }
})

fs.writeFileSync('buildings.json', JSON.stringify(replacement))
