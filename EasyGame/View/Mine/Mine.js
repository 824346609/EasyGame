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
  Image
} from 'react-native';

import MineInfor from './MineInfor.js'
import MineList from './MineList.js';

export default class Mine extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MineInfor />
        <MineList />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e8e8e8',
    flex:1
  },
  title:{
    backgroundColor:'#56beae',
    height:150,
    flexDirection:'row',//主轴方向
    alignItems:'center',
  },
  myImage:{
    alignItems:'center',
    height:70,
    width:70,
    borderRadius:30,
    backgroundColor:'#e8e8e8',
    opacity:90,
    shadowColor:'#e8e8e8',
    justifyContent:'center',
    marginLeft:5
  },
  image_my:{
    height:60,
    width:60,
    // 设置图片填充模式
    resizeMode:'contain',
    // 设置圆角
    borderRadius:25,
  },
  myInfor:{
    flexDirection:'column',
    marginLeft:16
  },
  myInfor_name:{
    marginLeft:5,
    flexDirection:'row',
    //justifyContent:'space-between',
  },
  myInfor_userName:{
    fontSize:17,
    fontWeight:'bold',
    color:'#fff'
  },
  myInfor_vipImg:{
    height:30,
    width:30,
  },
  myInfor_more:{
    marginLeft:5,
    flexDirection:'row',
    alignItems:'flex-start',
  },
  myInfor_more_font:{
    fontSize:15,
    color:'#fff'
  },
  item:{
    flexDirection:'row',//主轴方向
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    marginTop:2,
    justifyContent:'space-between',//对齐方式
  },
  flex:{
    flex:1
  },
  font:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:20,
  },
  font_small:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:20,
    color:'#e9e9e9'
  },
  icon_right:{
    marginRight:5,
    flexDirection:'row',
    alignItems:'center',
  },
  icon_left:{
    marginLeft:15,
    flexDirection:'row',
    alignItems:'center',
  },
  img_left:{
    height: 25,
    width:25,
  },
  img_right:{
  },
  list:{
    flexDirection:'column',
    marginTop:15,
  }
});
module.exports = Mine;