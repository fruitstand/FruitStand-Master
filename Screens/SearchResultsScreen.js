import React, { Component } from 'react';
import { TouchableHighlight, Alert, FlatList, StyleSheet, Text, View, Image, Linking } from 'react-native';
import flatListData from '../data/flatListData';

//Component for the top of the screen before the VendorCards
class ScreenHeader extends Component{
    render() {
      return (
        <View style={styles.screenHeader}> 
            <Image style={styles.grapeLogo} source={require('../assets/grape.png')} />
            <Text style={styles.searchResults}>{this.props.item.searchResults}</Text> 
        </View>
      );
    }
  }

//VendorCard Component
class VendorCard extends Component{

    constructor(props) {
        super(props);

        this._onPressButton = this._onPressButton.bind(this);
        this._OpenMaps = this._OpenMaps.bind(this);
      }

    //Opens Google Maps when asked
    _OpenMaps() {
        let userCoordinates = flatListData[0]['userCoordinates'];
        let { address, postalCode, city } = this.props.item.vendorAddress
    
        let saddr = encodeURIComponent(`${userCoordinates}`);
        let daddr = encodeURIComponent(`${address} ${postalCode}, ${city}`);
    
        Linking.openURL(`http://maps.google.com/?saddr=${saddr}&daddr=${daddr}`);
    }
    
      //Result of pressing a VendorCard
    _onPressButton() {
        Alert.alert(
            
            'Got Fruit.',
            'Open location in Google Maps?',
            [  //Details the text and functions of the alert
            {text: 'Take me there!',
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
        underlayColor='#F78764'>
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
        //How we get the first item rendered differently from the rest of the vendorCards
        if (this.props.index == 0) {
            return ( 
                <ScreenHeader item={this.props.item} index={this.props.index} />
            );
        }
        else {
            //Vendor cards which are mainly just styling code 
            return (
                <VendorCard item={this.props.item} index={this.props.index} />           
            );
        }
    }
}

//Made up fron flatlistData
//The top portion is rendered differently from the rest
export default class SearchResultsScreen extends Component {
    render() {
      return (
        <View style = {styles.screen}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=> {
                    return (
                    <FlatListItem item={item} index={index}>                    
                    </FlatListItem>
                    );
                }}>
            </FlatList>
        </View>
      );
    }
}

//StyleSheet
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        marginTop: 22, 
        backgroundColor: '#F78764'
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
        color: '#177E89',
        margin: 7,
        fontSize: 24,
        fontWeight: '600',
    },
    
});