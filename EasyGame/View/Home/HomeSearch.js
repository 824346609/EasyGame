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
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

import GameInfor from './GameInfor';
import SearchResult from './SearchResult';

export default class HomeSearch extends Component<{}> {
    constructor(props){
      super(props);
      this.state = {
        inputTexts: '',
        navigator:null
      };
    };

    componentDidMount(){
    this.setState({
      //img: this.props.img,
      title: this.props.title,
      navigator:this.props.navigator
    })
  };
    
    render() {
    return (
      <View style={styles.container}>
      {/*左边部分*/}
        <View style={styles.input}>
          <TextInput 
            placeholder={'请输入要搜索的游戏名'} //提示符
            placeholderTextColor={'#767676'}//提示符颜色
            maxLength={20}//最大长度
            onChangeText={(text)=>{this.setState({inputTexts:text})}}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.sourt}>
          <Text style={styles.font} onPress={()=>{
            this.props.navigator.push({
              component: SearchResult,
              name: '搜索页面',
              //传值
              params:{
                inputText: this.state.inputTexts,
              }
            })
          }}>搜索</Text>
        </View>
      </View>
    );
  }
  gaibian(){
    //alert('123123');
  }
  gaibian2(text){
    //alert(text);
  }
  getInput(text){
        this.setState({
          inputTexts: text
        })
    };

}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#4d6b80'
  },
  city:{
    alignItems:'center',//垂直方向对齐方式
    justifyContent:'center',
    marginLeft:5
  },
  cityFont:{
    fontSize:18,
    color:'#fff'
  },
  input:{
    flex:1,
    backgroundColor:'#fff',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
    height:45,
    width:width,
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    padding:0
  },
  sourt:{
    height:35,
    width:50,
    marginLeft:10,
    marginTop:13,
    marginRight:10,
    backgroundColor:'#669dc7',
    alignItems:'center',//垂直方向对齐方式
    justifyContent:'center',//水平对齐方式
    borderRadius:9
  },
  font:{
    fontSize:20,
    color:'#fff',
  }
});
module.exports = HomeSearch;