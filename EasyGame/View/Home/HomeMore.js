import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ListView,
  TouchableHighlight
} from 'react-native';

import GameInfor from './GameInfor.js';

var width = Dimensions.get('window').width;

var picArr = [
  {img:'http://cdn.steamstatic.com.8686c.com/steam/spotlights/3ccddda925e9fe3f1a5cc773/spotlight_image_english.jpg?t=1527722686',title:'Rising Storm 2'},
  {img:'http://cdn.steamstatic.com.8686c.com/steam/spotlights/2dffc740161be635dc14982a/spotlight_image_english.jpg?t=1527779545',title:'505game'},
  {img:'http://cdn.steamstatic.com.8686c.com/steam/apps/211820/header.jpg?t=1496932831',title:'Starbound'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/apps/594570/header_alt_assets_1.jpg?t=1527850040',title:'Total War'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/spotlights/08463e0722ab46de4877ae05/spotlight_image_english.jpg?t=1525907424',title:'Train'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/apps/552500/header_alt_assets_1.jpg?t=1527786188',title:' Vermintide 2'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/apps/220200/header.jpg?t=1520380129',title:'kerbal'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/apps/718670/header.jpg?t=1527863703',title:'Human'},
  {img:'https://cdn.steamstatic.com.8686c.com/steam/apps/578080/header.jpg?t=1525138879',title:'绝地求生'},
];

 export default class HomeMore extends Component<Props> {
  constructor(props){
    super(props);
    //实例化数据源，固定步骤
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})
    this.state = {
      dataSource: ds.cloneWithRows(this.getRow()),
      navigator:null
    }
  };

  getRow(){
    var dataArr = [];
    for (var i = 0; i < picArr.length; i++) {
      dataArr.push(picArr[i].title);
    }
    return dataArr;
  };

  componentDidMount(){
    this.setState({
      navigator:this.props.navigator
    })
  };
 
  render() {
    const navigater = this.props.navigator;
  	return(

  		<View style={styles.container}>
        <Text>热门精选</Text>
        <ListView
          contentContainerStyle = {styles.list}
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)}
        >
        </ListView>
  		</View>
  	)
  };
  
  renderRow(rowData:string, sectionID:number, rowID:number){
    return (
      <TouchableOpacity 
        onPress={()=>{
          this.props.navigator.push({
            component: GameInfor,
            name: '游戏详情',
            //传值
            params:{
              img:picArr[rowID].img,
              title:rowData
            }
          })
        }}
      >
        <View style={styles.row}>
          <Image style={styles.thumb} source={{uri:picArr[rowID].img}} />
          <Text style={styles.text}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  };

};

const styles = StyleSheet.create({
  titleText:{
        fontSize:16,
        color:'#31353a',
    },
  container:{
    //marginTop:2,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'white'
  },
  list:{
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems: 'flex-start',
    flexWrap:'wrap',
    width:width
  },

  row:{
    justifyContent:'center',
    padding:2,
    margin:3,
    width:100,
    height:200, 
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:5,
    borderColor:'#CCC'
  },
  thumb:{
    width:100,
    height:150
  },
  text:{
    flex:1,
    fontSize:16,
    marginTop:2,
    fontWeight:'bold'
  }
});

