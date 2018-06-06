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
  ListView,
  Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
var url = 'http://suggest.taobao.com/sug?code=utf-8&q=';


export default class GameInfor extends Component<{}> {

  constructor(props){
    super(props);
    //实例化数据源，固定步骤
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2}),
      inputText:null,
      stem:null
    };
  };
  //通过生命周期函数，初始化age参数
  componentDidMount(){
    this.setState({
      inputText:this.props.inputText,
      stem:this.props.inputText
    });
    var allUrl = url+this.props.inputText;
    fetch(allUrl)
      .then((response)=>response.json())
        .then(
          //在这里解析数据
          (responseJson)=>{
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(responseJson.result)
            })

          }
        )
        .catch(
          //捕获异常
          (error)=>{
            alert(error)
          }
        ).done()
  };

  render() {
    return(
      <View>
        <ToolbarAndroid
              navIcon={require('../../img/arrow_left_small.png')}
              onIconClicked={()=>{this.props.navigator.pop()}}
              style={{height:60,backgroundColor:'#e7e7e7'}}
              title={'搜索结果页'}
            />
      
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderMovies}
        />
      </View>
    );
  };

  renderMovies(rowData:string, sectionID:number, rowID:number){
    return(
      <View style={{alignItems:'center',marginTop:20,width:width,height:80,backgroundColor:'#fff'}}>
        <Text style={{fontSize:20,color:'#000'}}>游戏名：{rowData[0]}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
});
