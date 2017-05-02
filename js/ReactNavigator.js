// 学习使用StackNavigator
'user strict'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackNavigator} from 'react-navigation'
import ChatScreen from './learn.chatScreen'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'welcome',
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, navigate!</Text>
        <Button onPress={() => navigate('Chat', {user: 'Lucy'})}
          title='chat with Lucy'
        />
      </View>
    )
  }
}

const SimpleApp = StackNavigator ({
  Home: {screen: HomeScreen},
  Chat: {screen: ChatScreen},
})

export default SimpleApp
