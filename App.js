import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import HomeScreen from "./Screens/HomeScreen.js"
import ToggleScreen from "./ToggleFolder/ToggleScreen.js"
import SearchResultsScreen from "./Screens/SearchResultsScreen.js"

export default createMaterialBottomTabNavigator({
  Home: { screen: HomeScreen },
  Toggle: { screen: ToggleScreen },
  SearchResults: { screen: SearchResultsScreen }
}, {
  activeTintColor: 'black'
})

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
