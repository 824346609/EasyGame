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

export default class MineItem extends Component<{}> {
  render() {
    return (
          <View style={styles.item}>
            <View style={styles.icon_left}>
              <Image style={styles.img_left} source={this.props.title_img}></Image>
              <Text style={styles.font}>{this.props.title}</Text>            
            </View>
            <View style={styles.icon_right}>
              <Text style={styles.font_small}>{this.props.right_title}</Text>  
              <Image style={styles.img_right} source={require('../../img/arrow_right_small.png')}></Image>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
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
module.exports = MineItem;