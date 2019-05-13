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
                    
                    if (params.Strawberries == false && 
                        params.Apples == false &&
                        params.Dragonfruits == false &&
                        params.Passionfruits == false &&
                        params.Cranberries == false &&
                        params.Watermelons == false &&
                        params.Grapes == false &&
                        params.Oranges == false &&
                        params.Bananas == false &&
                        params.Peaches == false &&
                        params.Mangos == false &&
                        params.Pineapples == false &&
                        params.Cherries == false &&
                        params.Blueberries == false &&
                        params.Raspberries == false &&
                        params.Pears == false &&
                        params.Blackberries == false &&
                        params.Plums == false &&
                        params.Kiwis == false &&
                        params.Lemons == false &&
                        params.Tangerines == false &&
                        params.Pomegranates == false &&
                        params.Apricots == false &&
                        params.Nectarines == false &&
                        params.Avocados == false &&
                        params.Cantaloupes == false &&
                        params.Coconuts == false &&
                        params.Grapefruits == false &&
                        params.Limes == false &&
                        params.Lychees == false &&
                        params.Figs == false &&
                        params.Dates == false &&
                        params.Papayas == false ) {
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
            Pomegranates: false,
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
            Papayas: false
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
            Strawberries: this.state.Strawberries,
            Apples: this.state.Apples,
            Dragonfruits: this.state.Dragonfruits,
            Passionfruits: this.state.Passionfruits,
            Cranberries: this.state.Cranberries,
            Watermelons: this.state.Watermelons,
            Grapes: this.state.Grapes,
            Oranges: this.state.Oranges,
            Bananas: this.state.Bananas,
            Peaches: this.state.Peaches,
            Mangos: this.state.Mangos,
            Pineapples: this.state.Pineapples,
            Cherries: this.state.Cherries,
            Blueberries: this.state.Blueberries,
            Raspberries: this.state.Raspberries,
            Pears: this.state.Pears,
            Blackberries: this.state.Blackberries,
            Plums: this.state.Plums,
            Kiwis: this.state.Kiwis,
            Lemons: this.state.Lemons,
            Tangerines: this.state.Tangerines,
            Pomegranates: this.state.Pomegranates,
            Apricots: this.state.Apricots,
            Nectarines: this.state.Nectarines,
            Avocados: this.state.Avocados,
            Cantaloupes: this.state.Cantaloupes,
            Coconuts: this.state.Coconuts,
            Grapefruits: this.state.Grapefruits,
            Limes: this.state.Limes,
            Lychees: this.state.Lychees,
            Figs: this.state.Figs,
            Dates: this.state.Dates,
            Papayas: this.state.Papayas

        })


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
                        fruit = 'Pomegranates'
                        On = {this.state.Pomegranates}
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
