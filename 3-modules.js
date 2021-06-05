// Modules
const names = require ('./4-names.js')
const greet = require('./5-utils.js')
const data = require('./6-alternative-flavour.js')

// greet.sayHi("Susan")
// greet.sayHi(names.john)
// greet.sayHi(names.peter)

require('./7-mind-grenade.js')

greet.sayHi(data.singlePerson.name)