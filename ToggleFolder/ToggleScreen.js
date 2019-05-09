import React from 'react';
import { StyleSheet, View, ScrollView, Button, Alert} 
from 'react-native';

import Searchbutton from './Searchbutton';
import Toggle from './Toggle';

export default class ToggleScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            borderBottomColor: '#d3d3d3',
          },
        headerRight: (
            <Button 
                title='Search' 
                onPress={ () => { 
                    const { params = {} } = navigation.state;
                    
                    if (params.Apples == false && 
                        params.Oranges == false &&
                        params.Grapes == false &&
                        params.Bananas == false ) {
                        Alert.alert("No Fruit Selected",
                                    "Please make a selection to locate availabe vendors")
                    } else {
                        navigation.getParam('query')(); 
                    }

                
                }
                  }              
            />
            
        )});
    
    constructor(props) {

        super(props);

        this.state = {
            Apples: false,
            Oranges: false,
            Grapes: false,
            Bananas: false
        }

        this.changeToggle = this.changeToggle.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.sendData = this.sendData.bind(this);
        this.query = this.query.bind(this);
    }

    getUserLocation(callback) {
        navigator.geolocation.getCurrentPosition(position => {
          this.userlat = parseFloat(position.coords.latitude)
          this.userlong = parseFloat(position.coords.longitude)
            
          //this callback is necesary to ensure that the user date
          //is not sent before we can retrieve their location
          callback();
          

          //I believe the line of code below catches errors
        }, er => console.log (err));
      }

    sendData() {
        console.log("Test")
        //Make sure IP is correct
        return fetch('http://283b9070.ngrok.io/summary', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userlat: this.userlat,
            userlong: this.userlong,
            fruits: this.state,
            }
          ),
        })
          
        .then( (response) => response.json() )
        .then( (responseJson) => {
            
              this.props.navigation.navigate('SearchResults', responseJson)
              return responseJson;
          })
    
          .catch((error) => {
            console.error(error);
          }); 
          
      }
      
    query() {
        this.getUserLocation(this.sendData);
    }

    changeToggle(fruit,value) {
        
        if (value == false) { 
            this.setState({
            [fruit]: true
            }) 
        
            this.props.navigation.setParams({
                [fruit]: true
              });
        }
        else if (value == true) {
            this.setState({
            [fruit]: false
            }) 
            
            this.props.navigation.setParams({
                [fruit]: false
              });
            ;}
      }
      
    componentDidMount() {
        const { navigation } = this.props
        navigation.setParams({
            getUserLocation: this.getUserLocation,
            sendData: this.sendData,
            query: this.query,
            Apples: this.state.Apples,
            Oranges: this.state.Oranges,
            Bananas: this.state.Bananas,
            Grapes: this.state.Grapes,

        })


    }

    render() {
        return (
            
            <View style={styles.container}>

                <ScrollView style={styles.screencontainer}>

                    
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Apples'
                        On = {this.state.Apples}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Oranges'
                        On = {this.state.Oranges}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Grapes'
                        On = {this.state.Grapes}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Bananas'
                        On = {this.state.Bananas}
                        changeToggle = {this.changeToggle}
                    />
                    
                    {/*How to make a new toggle:
                    STEP 1.  Copy this:
                                        <Toggle 
                                            toggleComponent={ (component) => this.toggleComponent(component) }
                                            fruit = 'orange'
                                        />
                    STEP 2. Change the fruit to whatever you want 
                                example: fruit = 'grapes'
                                
                    STEP 3. Put everything under the existing lines, make sure that you have enough of these />
                    
                    STEP 4. Eat some bagels 
                    */}
                    {/*To be eventually deleted*/}
                    
                    
                    

                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	}
});
