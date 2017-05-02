import React, { Component } from 'react'
import { TextInput, TouchableOpacity, Text, View } from 'react-native'

export class TestSetNativeProps extends Component {
  constructor(props) {
    super(props)
    this.clearText =  this.clearText.bind(this)
  }

  clearText() {
    this._textInput.setNativeProps({text: ''})
  }
  render() {
    return (
      // 在多个视图组合时，需要放在容器View中，不然会报错
      <View style={{paddingTop: 20, width: 300, height: 100, alignItems: 'center'}}>
        <TextInput ref={component => this._textInput = component} style={{height: 24, paddingLeft: 20, paddingRight: 20}} placeholder="请输入内容"/>
        <TouchableOpacity onPress={this.clearText}>
            <Text>Clear text</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
