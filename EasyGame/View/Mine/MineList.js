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

import MineItem from './MineItem.js';

export default class MineList extends Component<{}> {
  render() {
    return (
      <View>
        <View style={styles.list}>
          <MineItem title_img={require('../../img/qb.png')} title={'我的钱包'} right_title={'办信用卡'} />
          <MineItem title_img={require('../../img/yue.png')} title={'余额'} right_title={'￥0.00'} />
          <MineItem title_img={require('../../img/yhq.png')} title={'抵用券'} right_title={'0'} />
          <MineItem title_img={require('../../img/kb.png')} title={'卡包'} right_title={'0'} />
        </View>
        <View style={styles.list}>
          <MineItem title_img={require('../../img/hy.png')} title={'好友去哪'} right_title={''} />
          <MineItem title_img={require('../../img/pj.png')} title={'我的评价'} right_title={''} />
          <MineItem title_img={require('../../img/sc.png')} title={'我的收藏'} right_title={''} />
          <MineItem title_img={require('../../img/kb.png')} title={'会员中心'} right_title={'v4'} />
          <MineItem title_img={require('../../img/shop-1.png')} title={'积分商城'} right_title={'0元礼包已上线'} />
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
    marginTop:10,
  }
});
module.exports = MineList;