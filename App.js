import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import animations from "./Screens/Screen1.js"
import JaredsScreen from "./Screens/Screen2.js"
import SearchResultsScreen from "./Screens/SearchResultsScreen.js"

export default createMaterialBottomTabNavigator({
  Chloes: { 
    screen: animations, 
    navigationOptions: { tabBarLabel: 'Home',
                         tabBarIcon:({tintColor}) => (
                         <Icon name="logo-facebook" color={tintColor} size={24} /> )}},
  Jareds: { screen: JaredsScreen },
  SearchResults: { screen: SearchResultsScreen }
}, {
  activeTintColor: 'red'
})

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
