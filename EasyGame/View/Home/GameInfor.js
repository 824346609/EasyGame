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
  Image,
  TouchableOpacity,
  ToolbarAndroid,
  WebView,
  Dimensions
} from 'react-native';
var {width,height} = Dimensions.get('window');

export default class GameInfor extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      title:null,
      img: null,
      age: null
    };
  };
  //通过生命周期函数，初始化age参数
  componentDidMount(){
    this.setState({
      img: this.props.img,
      title: this.props.title
    })
  };

  render() {
    return(
      <View style={{flex:1}}>
        <ToolbarAndroid
              navIcon={require('../../img/arrow_left_small.png')}
              onIconClicked={()=>{this.props.navigator.pop()}}
              style={{height:60,backgroundColor:'#e7e7e7'}}
              title={'游戏页'}
            />
        <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: 'https://store.steampowered.com/search/?term='+this.state.title}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  webView: {
    backgroundColor: "#fff",
    height: height-60,
    width:width,
  },
});
