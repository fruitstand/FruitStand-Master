import React, { Component } from 'react';
import { TouchableHighlight, Alert, FlatList, StyleSheet, Text, View, Image, Linking } from 'react-native';
import flatListData from '../data/flatListData';


class FlatListItem extends Component {

    _onPressButton() {
        Alert.alert(
            'Get your Fruit',
            'This will open the route in Google Maps',
            [
            {text: 'Open in Google Maps',
                    onPress: () => {
                        let { address, postalCode, city } = {address: "7801 Titan Dr",
                                                            postalCode: 95843,
                                                            city: "Antelope"}
                        let { myaddress, mypostalCode, mycity } = {
                            myaddress: "4400 Shandwick Dr",
                            mypostalCode: 95843,
                            mycity: "Antelope"
                        };
                    
                        let saddr = encodeURIComponent(`${myaddress} ${mypostalCode}, ${mycity}`);
                        let daddr = encodeURIComponent(`${address} ${postalCode}, ${city}`);
                    
                        Linking.openURL(`http://maps.google.com/?saddr=${saddr}&daddr=${daddr}`);
                    }
                    },
            {text: 'Cancel',
                //No onPress because the cancel button should not do anything
                style: 'cancel',
            },
            ],
            {cancelable: false}, )
      }
    
      _onLongPressButton() {
        Alert.alert('Your fruit is on its way')
      }
    render() {  
        
        if (this.props.index == 0) {
            return ( 
                    <View style={{
                            flex: 1,
                            margin: 13,
                            marginTop: 7,
                            MarginBottom: -6,
                            
                            borderRadius: 8,
                            alignItems: 'center',    }}> 
                            
                            <Image  style={{width: 200, height: 200}}
                                    source={require('../assets/grape.png')} />

                            <Text style={styles.SearchResults}>{this.props.item.foodDescription}</Text> 
                    </View> 
            );
        }

        else {
            return (
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                underlayColor="white">

                    <View style={{
                            flex: 1,
                            margin: 13,
                            marginTop: -6,
                            MarginBottom: -6,
                            backgroundColor: 'white',
                            borderRadius: 8,    }}> 
                                    
                            <Text style={styles.vendorCardDistance}>{this.props.item.name}</Text>
                            <Text style={styles.vendorCardName}>{this.props.item.foodDescription}</Text>
                            
                    </View>
                </TouchableHighlight>
                
            );
        }
    }
}



export default class BasicFlatList extends Component {
    render() {
      return (
        <View style = {{flex: 1, marginTop: 22, backgroundColor: '#F7555d'}}>
            
            
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
            >

            </FlatList>
            
        </View>
      );
    }
}

const styles = StyleSheet.create({
    vendorCardDistance: {
        color: '#777777',
        fontSize: 12,
        margin: 10,
        marginBottom: 0,
        fontWeight: '500',
    },
    vendorCardName: {
        color: '#57bdbd',
        margin: 7,
        fontSize: 24,
        fontWeight: '600',
    },
    SearchResults: {
        color: 'white',
        margin: 7,
        fontSize: 24,
        fontWeight: '600',
    }

});