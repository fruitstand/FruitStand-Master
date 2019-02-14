import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import ChloesScreen from "./Screens/Screen1.js"
import JaredsScreen from "./Screens/Screen2.js"
import GeosScreen from "./Screens/Screen3.js"

export default createMaterialBottomTabNavigator({
  Chloes: { 
    screen: ChloesScreen, 
    navigationOptions: { tabBarLabel: 'Home',
                         tabBarIcon:({tintColor}) => (
                         <Icon name="logo-facebook" color={tintColor} size={24} /> )}},
  Jareds: { screen: JaredsScreen },
  Geos: { screen: GeosScreen }
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