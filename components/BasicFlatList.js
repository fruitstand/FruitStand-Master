/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component
*/
import React, { Component } from 'react';
import { TouchableHighlight, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {
    _onPressButton() {
        Alert.alert("Slow down a little why don't you. Long press the button")
      }
    
      _onLongPressButton() {
        Alert.alert('Your fruit is on its way')
      }
    render() {          
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

export default class BasicFlatList extends Component {
    render() {
      return (
        <View style={{flex: 1, marginTop: 22, backgroundColor: '#F7555d'}}>
            <Text> Hello World! </Text>
            
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
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
        color: 'darkgrey',
        padding: 5,
        fontSize: 12,
        margin: 5,
        fontFamily: 'Optima'
    },
    vendorCardName: {
        color: '',
        padding: 7,
        fontSize: 24,
        fontFamily: '',  
    }

});