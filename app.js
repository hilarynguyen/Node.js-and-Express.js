//npm -glonal command, comes with node
// npm --version

//local dependency -use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName>

//package.json - manifest file (store important infor about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
// npm init -y (verything default)


const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
