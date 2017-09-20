import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

export default class MyComponent extends PureComponent {
  render() {
    return (
      <View>
        <Text>Hello {this.props.children}</Text>
      </View>
    )
  }
}
