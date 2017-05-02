// 学习使用StackNavigator，配合ReactNavigator.js使用
'use strict'
import React from 'react'
import { View, Text } from 'react-native'

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  }
  render() {
    const {params} = this.props.navigation.state
    return (
      <View>
        <Text> Chat with {params.user}</Text>
      </View>
    )
  }
}
export default ChatScreen
