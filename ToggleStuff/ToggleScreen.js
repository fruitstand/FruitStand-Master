//this will become my "app.js"
//clean
//if you want another toggle, go down to my next comment
import React from 'react';
import { 
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Searchbutton from './Searchbutton';
import Toggle from './Toggle';

export default class ToggleScreen extends React.Component {

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
        return fetch('http://32910b66.ngrok.io/summary', {
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

                    <View style={styles.screencontainerInner}>
                        

                        <Searchbutton 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            getUserLocation = {this.getUserLocation}
                            sendData = {this.sendData}
                            navigation={this.props.navigation}
                        />
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
                        {/*if you want to make a new toggle, do it here
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

                    </View>

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
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});