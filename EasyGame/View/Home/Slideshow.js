import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

var picArr =['https://cdn.steamstatic.com.8686c.com/steam/apps/359550/ss_891ce71ba6b2640270589687d58ef3be4b8fe044.600x338.jpg?t=1527101269',
'https://steamcdn-a.akamaihd.net/steam/apps/323190/ss_03fc3089daf0785e3bf34b32c385e80defefaeb4.600x338.jpg',
'https://steamcdn-a.akamaihd.net/steam/apps/242050/ss_7aa79ce41e1233ff22701281af51b5f0ab51245e.600x338.jpg',
'https://steamcdn-a.akamaihd.net/steam/apps/242050/ss_afb6f91bc96b51d0684bb4cbec4389b49dcb96db.600x338.jpg']

export default class Slideshow extends Component<Props> {
 
  //初始值
  constructor(props){
    super(props);
    //当前的页面
    this.state={currentPage:'0',
     };
  }
  // 不变的量初始化
     static defaultProps = {  
        duration: 1000,  
      }
      //复杂操作
      componentDidMount() {  
        //开启定时器
      this._startTimer();  
      }
       componentWillUnmount() {  
        // 如果存在this.timer，则使用clearTimeout清空。  
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear  
        this.timer && clearTimeout(this.timer);  
      }
      _startTimer()
    {  
        let scrollView = this.refs.scrollView;  
        this.timer = setInterval(  
          ()=>{   
           let imageCount = picArr.length;  
           //4.1 设置圆点  
           let activePage = 0;  
           //4.2判断  
           if(this.state.currentPage>=imageCount+1){  
             activePage = 0;  
           }else{  
             activePage = this.state.currentPage+1;  
           }  
           //4.3 更新状态机  
           this.setState({currentPage:activePage});  
           //4.4 让scrollview 滚动起来  
           let offsetX = activePage * width; 
          this._scrollView.scrollTo({x:offsetX,y:0,animated:true});
          },  
           this.props.duration
         );  
        }
  render() {
    return (
     <View style={styles.container}>
     <Text>精选推荐</Text>
     <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal = {true}
      showsHorizontalScrollIndicator = {true}
      pagingEnabled = {false}
      onMomentumScrollEnd = {this.onAnimationEnd.bind(this)}
      ref={ (component) => {this._scrollView = component} }
      >
     {this.renderScrollItem()}
     </ScrollView>
     {/*返回指示器*/} 
        <View style={styles.pageViewStyle}>
        {/*返回圆点*/}
        {this.renderPageCicle() }
        </View>
      </View>
    );
  }
  renderScrollItem(){
   var itemArr = []// 定义空的组件数组，里面一会放图片
   //建立照片数组，和原生drawable下的文件夹里照片名对应 
   //对picArr数组遍历，将里面内容放到itemArr里
   for (var i = 0; i < picArr.length; i++) {
    itemArr.push(
      <Image key={i} source={{uri:picArr[i]}} style={{width:width,height:200}}/>
      )
   }
   return itemArr;
  }
  renderPageCicle(){
    var indicatorArr=[];
    //拿到图像数组     
    var style ;
    for(var i=0;i<picArr.length;i++){
      //判断
      style=(i==this.state.currentPage)? {color:'orange'}:{color:'#ffffff'};
      indicatorArr.push(
        <Text  key={i} style={[styles.fontSizeStyle,style]}>&bull;</Text>
        );
    }
    return indicatorArr;
  }
  //手动滑动分页实现
  onAnimationEnd(e){
    //求出水平方向的偏移量
    var offSetX=e.nativeEvent.contentOffset.x;
    //求出当前的页数
    var currentPage=Math.floor(offSetX/width);
    //更新状态机，重新绘制UI
    this.setState({
     currentPage:currentPage
    });
  }
};

const styles = StyleSheet.create({
});

