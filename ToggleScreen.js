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
                title='Search' 
                onPress={ () => { 
                    data = {'SearchResults': {'searchCount': '5 matches found', 'userCoordinates': {'ULat': 38.7119922781989, 'ULong': -121.35742949965585}}, 'vendors': [{'distance': '0.28 mi away', 'vendorName': "Ann's Apples", 'vendorAddress': {'Lat': 38.710925, 'Long': -121.352341}}, {'distance': '0.88 mi away', 'vendorName': "Peter's Pear", 'vendorAddress': {'Lat': 38.723348, 'Long': -121.364647}}, {'distance': '0.9 mi away', 'vendorName': 'Last Vendor Around', 'vendorAddress': {'Lat': 38.705224, 'Long': -121.343284}}, {'distance': '0.92 mi away', 'vendorName': 'Mexican Imported', 'vendorAddress': {'Lat': 38.700321, 'Long': -121.365493}}, {'distance': '1.61 mi away', 'vendorName': 'MynameisPedro', 'vendorAddress': {'Lat': 38.71722, 'Long': -121.3865493}}]}
                    navigation.navigate('SearchResults',data);
                 } }              
            />
        )});
    
    constructor(props) {

        super(props);

        this.state = {
            Strawberries: false,
            Apples: false,
            Dragonfruits: false,
            Passionfruits: false,
            Cranberries: false,
            Watermelons: false,
            Grapes: false,
            Oranges: false,
            Bananas: false,
            Peaches: false,
            Mangos: false,
            Pineapples: false,
            Cherries: false,
            Blueberries: false,
            Raspberries: false,
            Pears: false,
            Blackberries: false,
            Plums: false,
            Kiwis: false,
            Lemons: false,
            Tangerines: false,
            Pomergranates: false,
            Apricots: false,
            Nectarines: false,
            Avocados: false,
            Cantaloupes: false,
            Coconuts: false,
            Grapefruits: false,
            Limes: false,
            Lychees: false,
            Figs: false,
            Dates: false,
            Papayas: false,

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
                        fruit = 'Strawberries'
                        On = {this.state.Strawberries}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Apples'
                        On = {this.state.Apples}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Dragonfruits'
                        On = {this.state.Dragonfruits}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Passionfruits'
                        On = {this.state.Passionfruits}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Cranberries'
                        On = {this.state.Cranberries}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Watermelons'
                        On = {this.state.Watermelons}
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
                        fruit = 'Oranges'
                        On = {this.state.Oranges}
                        changeToggle = {this.changeToggle}
                    />
                    <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Bananas'
                        On = {this.state.Bananas}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Peaches'
                        On = {this.state.Peaches}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Mangos'
                        On = {this.state.Mangos}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Pineapples'
                        On = {this.state.Pineapples}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Cherries'
                        On = {this.state.Cherries}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Blueberries'
                        On = {this.state.Blueberries}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Raspberries'
                        On = {this.state.Raspberries}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Pears'
                        On = {this.state.Pears}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Blackberries'
                        On = {this.state.Blackberries}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Plums'
                        On = {this.state.Plums}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Kiwis'
                        On = {this.state.Kiwis}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Lemons'
                        On = {this.state.Lemons}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Tangerines'
                        On = {this.state.Tangerines}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Pomergranates'
                        On = {this.state.Pomergranates}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Apricots'
                        On = {this.state.Apricots}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Nectarines'
                        On = {this.state.Nectarines}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Avocados'
                        On = {this.state.Avocados}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Cantaloupes'
                        On = {this.state.Cantaloupes}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Coconuts'
                        On = {this.state.Coconuts}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Grapefruits'
                        On = {this.state.Grapefruits}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Limes'
                        On = {this.state.Limes}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Lychees'
                        On = {this.state.Lychees}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Figs'
                        On = {this.state.Figs}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Dates'
                        On = {this.state.Dates}
                        changeToggle = {this.changeToggle}
                    />
                     <Toggle 
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        fruit = 'Papayas'
                        On = {this.state.Papayas}
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
