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
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import Home from '../../App'

const { width, height } = Dimensions.get('window');
export default class Animation extends Component<Props> {
  // componentDidMount(){
  //   setTimeout(
  //     ()=>{
  //       //跳转到首页
  //       this.props.navigator.replace({
  //         component:Home
  //       })
  //     },2000)
  // };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}>
        <Image source={require('../../img/welcome1.jpeg')} style={styles.backgroundImage} />
        <Image source={require('../../img/welcome2.jpeg')} style={styles.backgroundImage}/>
        <ImageBackground source={require('../../img/welcome3.jpeg')} style={[styles.backgroundImage,styles.btnOut]}>
        <View style={styles.btn}>
          <Text onPress={()=>{this.props.navigator.replace({component:Home})}} style={styles.btnText}>启动应用</Text>
        </View>
        </ImageBackground>
      </ScrollView>
    );
  };
}
const styles = StyleSheet.create({
  contentContainer: {
        width: width * 3,
        height: height,
  },
  backgroundImage: {
        width: width,
        height: height,
  },
  btnOut:{
        alignItems:'center',
    },
  btn:{
    width:150,
    height:50,
    backgroundColor:'#90ee90',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    marginTop:550,
  },
  btnText:{
    fontSize:18,
    color:'#fff'
  },
});
