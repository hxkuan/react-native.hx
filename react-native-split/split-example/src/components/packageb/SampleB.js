import React from 'react';
import {
  View,
  Text
} from 'react-native';
import ApiOfSampleB from './ApiOfSampleB';
import {
  FuncA, FuncB
} from 'example/src/modules';

console.log('hxk---','loading SampleB');
class SampleB extends React.Component {
  render() {
    FuncA();
    FuncB();
    ApiOfSampleB();
    return (
      <View>
        <Text>This is MainB</Text>
      </View>
    );
  }
}

const AppRegistry = require('AppRegistry');
AppRegistry.registerComponent('SampleB', () => SampleB);

module.exports = SampleB;
