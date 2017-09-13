const _ = require('lodash');

console.log('hxk---','loading ModuleA');

module.exports = function() {
  _.isEmpty('abc');
  console.log('hxk----','This is module A! I have lodash!');
};