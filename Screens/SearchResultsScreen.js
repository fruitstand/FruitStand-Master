import React, { Component } from 'react';
import { TouchableHighlight, Alert, FlatList, StyleSheet, Text, View, Image, Linking } from 'react-native';


//The component for the top of the screen before the VendorCards
class ScreenHeader extends Component{
    render() {
      return (
        <View style={styles.screenHeader}> 
            <Image style={styles.grapeLogo} source={require('../assets/grape.png')} />
            <Text style={styles.searchResults}>{this.props.searchCount}</Text> 
        </View>
      );
    }
  }

//The actual VendorCard Component
class VendorCard extends Component{

    constructor(props) {
        super(props);

        this._onPressButton = this._onPressButton.bind(this);
        this._OpenMaps = this._OpenMaps.bind(this);
      }

    //Opens Google Maps when asked
    _OpenMaps() {
        
        let {ULat, ULong} = this.props.miscData.userCoordinates;
        let { Lat, Long } = this.props.item.vendorAddress
    
        let saddr = encodeURIComponent(`${ULat} ${ULong}`);
        let daddr = encodeURIComponent(`${Lat} ${Long}`);
    
        Linking.openURL(`http://maps.google.com/?saddr=${saddr}&daddr=${daddr}`);
    }
    
      //The result of pressing a vendorCard
    _onPressButton() {
        Alert.alert(
            'Get your Fruit',
            'This will open the route in Google Maps',
            [  //The code below details the text and functions of the alert
            {text: 'Open in Google Maps',
                    onPress: this._OpenMaps },
            {text: 'Cancel',
                //No onPress because the cancel button should not do anything
                style: 'cancel', },
            ],
            {cancelable: false}, )
      }
    
    render() {
      return (
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onPressButton} 
        underlayColor="white">
                    <View style={styles.vendorCard}> 
                            <Text style={styles.vendorCardDistance}>{this.props.item.distance}</Text>
                            <Text style={styles.vendorCardName}>{this.props.item.vendorName}</Text>
                    </View>
        </TouchableHighlight>
      );
    }
  }


class FlatListItem extends Component {
    render() {  
        //This is how we get the first item rendered differently from the rest of the vendorCards
        if (this.props.index == 0) {
            return ( 
                <View>
                    <ScreenHeader searchCount = {this.props.miscData.searchCount}/> 
                    <VendorCard item={this.props.item} index={this.props.index} miscData = {this.props.miscData} /> 
                </ View >
            );
        }
        else {
            //These are the vendor cards which are mainly just styling code 
            return (
                <VendorCard item={this.props.item} index={this.props.index} miscData = {this.props.miscData}/>           
            );
        }
    }
}

//The entire screen is made up of a FlatList
//The top portion is simply rendered differently from the rest
export default class SearchResultsScreen extends Component {
    static navigationOptions = {
        header: null
      }

    render() {
        const {params} = this.props.navigation.state
        console.log(params)

      return (
        <View style = {styles.screen}>
            <FlatList 
                data={this.props.navigation.state.params.vendors}
                renderItem={({item, index})=> {
                    return (
                    <FlatListItem item={item} index={index} miscData = {this.props.navigation.state.params.SearchResults}/>                    
                    );
                }}
                keyExtractor = {item => item.vendorName}
                >
            </FlatList>
        </View>
      );
    }
}

//StyleSheet
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        marginTop: 0,
        paddingTop: 22, 
        backgroundColor: '#F8777D'
    },
    screenHeader: {
        flex: 1,
        margin: 13,
        marginTop: 7,
        borderRadius: 8,
        alignItems: 'center', 
    },
    searchResults: {
        color: 'white',
        margin: 7,
        fontSize: 24,
        fontWeight: '600',
    },
    grapeLogo: {
        width: 200,
        height: 200,
    },
    vendorCard: {
        flex: 1,
        margin: 13,
        marginTop: -6,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    vendorCardDistance: {
        color: '#777777',
        fontSize: 12,
        margin: 10,
        marginBottom: 0,
        fontWeight: '500',
    },
    vendorCardName: {
        color: '#65BCBF',
        margin: 7,
        fontSize: 24,
        fontWeight: '600',
    },
    
});