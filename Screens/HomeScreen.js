import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media.giphy.com/media/nL8qXEBkRu7iV9TmjL/giphy.gif'}} />
      </View>
    );
  }
}

/*
Other animation choices:

https://media.giphy.com/media/3bztARr7COx2wsoXhT/giphy.gif

https://media.giphy.com/media/LZlxtaXrouhogT8jzC/giphy.gif

https://media.giphy.com/media/nL8qXEBkRu7iV9TmjL/giphy.gif

https://media.giphy.com/media/1qWJUuiHXdZGDJfZcz/giphy.gif

https://media.giphy.com/media/8gIumBBVfrJjaVBtgy/giphy.gif

https://media.giphy.com/media/mWV9KjnB6iyGKytakR/giphy.gif

*/

//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});