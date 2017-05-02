import React, { Component } from 'react';
import { Image, Animated } from 'react-native';

export class Playground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.Image
        source={require('../img/sl.jpeg')}
        style={{
          transform: [{scale: this.state.bounceValue}, {position: 'absolute', top: 20, left: 20}],
          width: 121, height: 140,
        }, {position: 'absolute', top: 20, left: 20}}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.sequence(
      Animated.decay(position, {
        velocity: {x: gestureState.vx, y: gestureState.vy},
        deceleration: 0.9,
      }),
      Animated.parallel([
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
        }),
        Animated.timing(twirl, {
          toValue: 360,
        }),
      ]),
    ).start();
    /*
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {toValue: 0.8, friction: 1,}
    ).start();
    */
  }

}
