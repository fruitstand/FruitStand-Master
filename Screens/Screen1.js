import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"

export default class ChloesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Chloes Screen! This is cooler than buttons. </Text>
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