import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,} 
from 'react-native';

export default class Searchbutton extends React.Component {

    render() {

        if (!this.props.visible) {
            return false;
        }
        
        return (
			
            <View style={styles.component}>
							
                                <TouchableOpacity 
										style={styles.item1}
										onPress={() => this.props.navigation.navigate('SearchResults', {})
										}
									>
										
										<Text style={styles.item1TouchableOpacity}>
											Get fruit? 
										</Text>
										
									</TouchableOpacity>
									
                			</View>
                	            
        );

    }

}

const styles = StyleSheet.create({

	component: {
		//Entire search box
		flexDirection: 'row',
		width: 50,
	    paddingLeft: 15,
	    paddingRight: 15,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
		width: '100%',
	    height: 45,
	},
	
	item1: {
		//Contents of search button
		backgroundColor: '#177E89',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
		width: '100%',
		//Width of search button
		height: '100%',
		//Height of search button
	    justifyContent: 'center',
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1TouchableOpacity: {
		//Change text font size
		color: '#fff',
	    fontSize: 15,
	    textAlign: 'center',
	    width: '100%',
	},
	
});