import React, { Component } from 'react';
import { LayoutAnimation, TouchableOpacity, Image } from 'react-native';

export class LayoutAnimationLearn extends Component {
  constructor(props) {
    super(props)
    this.state = {w: 127, h: 140}
    this._onPress = this._onPress.bind(this)
  }
  componentWillMount() {
    LayoutAnimation.spring()
  }
  _onPress() {
    LayoutAnimation.spring()
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Image
          source={require('../img/sl.jpeg')}
          style={{width: this.state.w, height: this.state.h}}
        />
      </TouchableOpacity>

    );
  }
}
