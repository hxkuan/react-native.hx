const _ = require('lodash');
console.log('hxk---','loading ModuleB');
module.exports = function() {
  _.isEmpty('abc');
  console.log('hxk----','This is module B! I have lodash too!');
};