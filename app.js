const _ = require('lodash')

const items = [1,[2,3,[4,5]]]

let newItems = _.flattenDeep(items)
console.log(newItems)