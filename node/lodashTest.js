const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]

//It it the method which flattens the data into single approachability

const newItems = _.flattenDeep(items);

console.log(newItems);