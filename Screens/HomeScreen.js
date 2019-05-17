import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Constants, Video, AppLoading, Asset} from 'expo';

export default class App extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    
    this.state = {
      assetsLoaded: false,
    };
  }
  
  async componentDidMount() {
    await Asset.loadAsync([
      require('../assets/WelcomeGif.mp4'),
      require('../assets/grape.png'),
    ]),

    this.setState({ assetsLoaded: true });
  }

  render() {
    if (this.state.assetsLoaded) {
      return (
        <View style={styles.container}>
          <Video
            source={require('../assets/WelcomeGif.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          />

          <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('Toggle');
                  } }>
                  <Text> Touch Here </Text>
          </TouchableOpacity>


        </View>
      ); 
    } else {
      return <AppLoading />;
     } 
  }
}

/*
Other animation choices, possible change to upload instead of website link:

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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});