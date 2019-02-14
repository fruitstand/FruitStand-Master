import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

export default class GeosScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Geos Screen! Thanks Boss. </Text>
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