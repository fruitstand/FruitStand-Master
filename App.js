import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "./Screens/HomeScreen.js"
import ToggleScreen from "./ToggleFolder/ToggleScreen.js"
import SearchResultsScreen from "./Screens/SearchResultsScreen.js"


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Toggle: { screen: ToggleScreen },
  SearchResults: { screen: SearchResultsScreen }
}, {
  activeTintColor: 'black'
})

const App = createAppContainer(MainNavigator); 
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
