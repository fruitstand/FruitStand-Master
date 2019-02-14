import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

export default class JaredsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style = {{color: 'red'}}>Jareds Screen! Don't worry, I didn't harm myself! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});