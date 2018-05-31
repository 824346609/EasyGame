import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Slideshow from './Slideshow.js'

export default class Home extends Component<Props> {
 
  render() {
  	return(
  		<View>
  			<Slideshow/>
  		</View>
  	)
  };
};

const styles = StyleSheet.create({
});

module.exports = Home;
