/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import App from './src/App'

export default class Enzyme2Json3RNTest extends Component {
  render() {
    return (
      <View>
        <App error="" />
      </View>
    )
  }
}

AppRegistry.registerComponent('Enzyme2Json3RNTest', () => Enzyme2Json3RNTest)
