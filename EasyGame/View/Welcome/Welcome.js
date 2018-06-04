/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Animated,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import Animation from './Animation';
import Home from '../../App'
const splashImg = require('../../img/sone.jpg');//加载图片

const { width, height } = Dimensions.get('window');

export default class Welcome extends Component<Props> {
  

  render() {
    return (
      <Navigator
          initialRoute={{ name: '欢迎页', component: Animation }}
          configureScene={() => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
           renderScene={(route, navigator) => {
                let Component = route.component;
                if(route.component) {
                  //这里有个 { ...route.params }
                  return <Component {...route.params} navigator={navigator} />
                }
              }}
      /> 
    );
  };

}
const styles = StyleSheet.create({
});
