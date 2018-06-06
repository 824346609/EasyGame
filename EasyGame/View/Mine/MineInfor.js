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
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from 'react-native';

const fetchJsonp = require('fetch-jsonp');

export default class MineInfor extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      inputText:null,
      userName:null,
      userImg:null,
      modalVisible:false,
      result:null
    };
  };
  //通过生命周期函数，初始化age参数
  componentDidMount(){
  };

  render() {
    if(this.state.userName!=null){
      return (
          <View style={styles.title}>
            <View style={styles.myImage}>
              <Image style={styles.image_my} source={{uri:this.state.userImg}}></Image>
            </View>
            <View style={styles.myInfor}>
              <View style={styles.myInfor_name}>
                <Text style={styles.myInfor_userName}>{this.state.userName}</Text>
              </View>
              <View style={styles.myInfor_more}>
                <Text style={styles.myInfor_more_font}>个人信息</Text>
                <Image source={require('../../img/arrow_right_small.png')}></Image>
              </View>
            </View>
            <Text></Text>
          </View>
      );
    }else{
      return (
          <View style={styles.title}>
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
             <View style={styles.model}>
                  <Text style={{fontSize:20,color:'blue'}}>请输入qq号</Text>
                  <View style={{backgroundColor:'#fff',width:300}}>
                    <TextInput 
                      keyboardType={'numeric'}
                      placeholder={'请输入QQ号'} //提示符
                      placeholderTextColor={'#767676'}//提示符颜色
                      maxLength={20}//最大长度
                      onChangeText={(text)=>{this.setState({inputText:text})}}
                      underlineColorAndroid='transparent'
                    />
                  </View>
                  <View style={styles.sourt}>
                    <TouchableOpacity onPress={this.login.bind(this)}>
                      <Text style={styles.font}>登录</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.sourt}>
                    <TouchableOpacity onPress={() => {
                      this.setState({modalVisible:false})
                      }}>
                      <Text style={styles.font}>取消</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </Modal>
            <View style={styles.myImage}>
              <Image style={styles.image_my} source={require('../../img/tx.png')}></Image>
            </View>
            <View style={styles.myInfor}>
              <View style={styles.myInfor_name}>
                <Text style={styles.myInfor_userName}
                  onPress={()=>{this.setState({modalVisible: true})}}
                >请登录</Text>
              </View>
            </View>
          </View>
      );
    }
  };

  login(){
    var results = null
    var usernames = null;
    var imgurl = 'http://q2.qlogo.cn/headimg_dl?bs='+this.state.inputText+'&dst_uin='+this.state.inputText+'&dst_uin='+this.state.inputText+'&;dst_uin='+this.state.inputText+'&spec=100&url_enc=0&referer=bu_interface&term_type=PC';
    var userurl = 'http://r.pengyou.com/fcg-bin/cgi_get_portrait.fcg?uins='+this.state.inputText;
    fetch(userurl)
      .then((response)=>{
        return response.text()
      }).then((result)=>{
        results = result.toString().match(/\(([^)]*)\)/)[1]
        usernames = JSON.parse(results)[this.state.inputText][6]
        this.setState({userImg:imgurl,modalVisible:false,userName:usernames})
      }).catch(
          //捕获异常
          (error)=>{
            alert('发生错误了'+error)
          }
        ).done();
     
  };
}

const styles = StyleSheet.create({
  model:{
    flexDirection:'column',
    marginTop:100,
    backgroundColor:'#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center'
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
    fontSize:15,
    color:'#000'
  },
  title:{
    backgroundColor:'#181a21',
    height:150,
    flexDirection:'column',//主轴方向
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
    marginLeft:5,
    marginTop:20
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
    marginLeft:16,
    alignItems:'center',
  },
  myInfor_name:{
    marginLeft:1,
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'space-between',
  },
  myInfor_userName:{
    fontSize:17,
    fontWeight:'bold',
    color:'#fff'
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
});
module.exports = MineInfor;