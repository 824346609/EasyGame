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
  TouchableOpacity
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';

import Home from './View/Home/Home.js';
import More from './View/More/More.js';
import Mine from './View/Mine/Mine.js';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title = '首页'
          selectedTitleStyle = {{color:'red',fontSize:10}}
          renderIcon = {
            ()=> <Image source = {require('./img/home.png')}
                    style = {styles.iconStyle}/>
          }
          renderSelectedIcon = {
            ()=> <Image source = {require('./img/homePress.png')}
                    style = {styles.iconStyle}/>
          }
          badgeText = {'2'}
          onPress = {
            ()=>{
              this.setState({
                selectedTab: 'home'
              })
            }
          }
          selected = {this.state.selectedTab === 'home'}
        >
          <Navigator
            //初始化路由
            initialRoute = {{
              component: Home,
              name: '首页',
            }} 
            //页面渲染，参数为路由和导航器
            renderScene = {
              (route, navigator)=>{
                //获取route里的页面
                let Component = route.component;
                //如果有页面,固定配置，引入界面
                if (route.component) {
                  return <Component {...route.params} navigator = {navigator} />
                }
              }
            }
            //动画效果
            // configureScene = {()=>{
            //   return Navigator.SceneConfigs.VerticalDownSwipeJump
            // }}
          />
        </TabNavigator.Item>
        <TabNavigator.Item
          title = '更多'
          renderIcon = {
            ()=> <Image source = {require('./img/more.png')}
                    style = {styles.iconStyle}/>
          }
          renderSelectedIcon = {
            ()=> <Image source = {require('./img/morePress.png')}
                    style = {styles.iconStyle}/>
          }
          badgeText = {'2'}
          onPress = {
            ()=>{
              this.setState({
                selectedTab: 'more'
              })
            }
          }
          selected = {this.state.selectedTab === 'more'}
        >
          <Navigator
            //初始化路由
            initialRoute = {{
              component: More,
              name: '更多',
            }} 
            //页面渲染，参数为路由和导航器
            renderScene = {
              (route, navigator)=>{
                //获取route里的页面
                let Component = route.component;
                //如果有页面,固定配置，引入界面
                if (route.component) {
                  return <Component {...route.params} navigator = {navigator} />
                }
              }
            }
            //动画效果
            configureScene = {()=>{
              return Navigator.SceneConfigs.VerticalDownSwipeJump
            }}
          />
        </TabNavigator.Item>
        <TabNavigator.Item
          title = '我的'
          renderIcon = {
            ()=> <Image source = {require('./img/mine.png')}
                    style = {styles.iconStyle}/>
          }
          renderSelectedIcon = {
            ()=> <Image source = {require('./img/minePress.png')}
                    style = {styles.iconStyle}/>
          }
          badgeText = {'2'}
          onPress = {
            ()=>{
              this.setState({
                selectedTab: 'mine'
              })
            }
          }
          selected = {this.state.selectedTab === 'mine'}
        >
          <Navigator
            //初始化路由
            initialRoute = {{
              component: Mine,
              name: '我的',
            }} 
            //页面渲染，参数为路由和导航器
            renderScene = {
              (route, navigator)=>{
                //获取route里的页面
                let Component = route.component;
                //如果有页面,固定配置，引入界面
                if (route.component) {
                  return <Component {...route.params} navigator = {navigator} />
                }
              }
            }
            //动画效果
            configureScene = {()=>{
              return Navigator.SceneConfigs.VerticalDownSwipeJump
            }}
          />
        </TabNavigator.Item>
      </TabNavigator>
    );
  };
}

var NavigationBarRouteMapper = {
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text style={styles.navTitleStyle}>
                    应用标题
                </Text>
            </View>
        );
    },
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text style={styles.navLeftButtonStyle}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.navRightButtonStyle}>
                            right
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },

};

const styles = StyleSheet.create({
  iconStyle:{
    width:22,
    height:22
  },
  navigationBarStyle:{
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      shadowOffset: {
          width: 1,
          height: 0.5,
      },
      shadowColor: '#999999',
      shadowOpacity: 0.2,
    },

});
