import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,} 
from 'react-native';

export default class Searchbutton extends React.Component {
	
    render() {   
        return (
			
            <View style={styles.component}>
					<TouchableOpacity 
							style={styles.item1}
							onPress={() => {this.props.getUserLocation(this.props.sendData);}
						}>

						<Text style={styles.buttonText}>
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
		flex:1,
	    paddingLeft: 15,
	    paddingRight: 15,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	item1: {
		//Contents of search button
		backgroundColor: '#177E89',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
	    justifyContent: 'center',
		alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	buttonText: {
		//Change text font size
		color: '#fff',
	    fontSize: 15,
	},
	
});