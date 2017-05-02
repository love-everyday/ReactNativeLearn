/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  NativeModules,
} from 'react-native';
import AppNavigator from './js/ReactNavigator'
import Calendar from './js/learn.calendar'
AppRegistry.registerComponent("ReactNativeLearn", () => AppNavigator)

/* 测试StackNavigator

*/
/*
import { TestSetNativeProps } from './js/learn.setNativeProps';

export default class ReactNativeLearn extends Component {

  image1Click() {
    console.log("点将台");
  }
  longPress() {
    console.log('Long Press');
  }
  render() {
    var contents = this.props["poetry"].map(
        poetry => <Text key={poetry.content} style={{fontSize: poetry.fontSize}}>{poetry.content}{'\n'}</Text>
      );
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
          {contents}
          </Text>
          <TouchableOpacity onPress={this.image1Click}>
            <Image source={{uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493780323&di=6a1dae5f6a4be07643597634d33267b4&imgtype=jpg&er=1&src=http%3A%2F%2Fgame.people.com.cn%2Fmediafile%2F200505%2F23%2FF2005052311131900000.jpg"}} style={{width: 400 * 0.6, height: 267 * 0.6}}/>
          </TouchableOpacity>
          <TestSetNativeProps />
      </View>

      // <TouchableOpacity onPress={this.image2Click} onLongPress={this.longPress}>
      //   <Image source={require('./img/sl.jpeg')} style={{width: 121, height: 140}}/>
      // </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeLearn', () => ReactNativeLearn);
*/
