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
  ListView
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import {
  Navigator
} from 'react-native-deprecated-custom-components';
var width = Dimensions.get('window').width;

import Slideshow from './Slideshow.js';
import HomeSearch from './HomeSearch.js';
import HomeMore from './HomeMore.js';
import GameInfor from './GameInfor.js';


export default class Home extends Component<Props> {
 
  render() {
  	return(
  		<View>
        <ScrollView>
          <HomeSearch navigator={this.props.navigator}/>
    			<Slideshow/>
          <HomeMore navigator={this.props.navigator}/>
        </ScrollView>
  		</View>
  	)
  };
};

const styles = StyleSheet.create({
});

module.exports = Home;
