import React from 'react';
import { StyleSheet, View, ScrollView, Button} 
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
                title='Save' 
                onPress={ () => { 
                    data = {'SearchResults': {'searchCount': '5 matches found', 'userCoordinates': {'ULat': 38.7119922781989, 'ULong': -121.35742949965585}}, 'vendors': [{'distance': '0.28 mi away', 'vendorName': "Ann's Apples", 'vendorAddress': {'Lat': 38.710925, 'Long': -121.352341}}, {'distance': '0.88 mi away', 'vendorName': "Peter's Pear", 'vendorAddress': {'Lat': 38.723348, 'Long': -121.364647}}, {'distance': '0.9 mi away', 'vendorName': 'Last Vendor Around', 'vendorAddress': {'Lat': 38.705224, 'Long': -121.343284}}, {'distance': '0.92 mi away', 'vendorName': 'Mexican Imported', 'vendorAddress': {'Lat': 38.700321, 'Long': -121.365493}}, {'distance': '1.61 mi away', 'vendorName': 'MynameisPedro', 'vendorAddress': {'Lat': 38.71722, 'Long': -121.3865493}}]}
                    navigation.navigate('SearchResults',data);
                 } }              
            />
        )});
    
    constructor(props) {

        super(props);

        this.state = {
            Apples: false,
            Oranges: false,
            Grapes: false
        }

        this.changeToggle = this.changeToggle.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.sendData = this.sendData.bind(this);
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
        //Make sure IP is correct
        return fetch('http://3cf18ad1.ngrok.io/summary', {
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

    changeToggle(fruit,value) {
        
        if (value == false) { 
            this.setState({
            [fruit]: true
            }) }
        else if (value == true) {
            this.setState({
            [fruit]: false
            }) };
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
                    
                    <Searchbutton 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            getUserLocation = {this.getUserLocation}
                            sendData = {this.sendData}
                            navigation={this.props.navigation}
                    />
                    

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
