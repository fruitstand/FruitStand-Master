import React from 'react';
import { StyleSheet, View, Text, Switch,} 
from 'react-native';
export default class Toggle extends React.Component {

    constructor(props) {
    
        super(props);

    }

    render() {
        
        return (

            <View style={styles.toggleRow}>
						<Text style={styles.toggleText}>
							{this.props.fruit}
						</Text>
					
						<View style={styles.theToggle}>
							<Switch 
								value={this.props.On}
								trackColor={{true: '', false: '#F8777D'}}
								ios_backgroundColor={"#F8777D"}
								onValueChange={() => {
									this.props.changeToggle(this.props.fruit,this.props.On);
								} }
								/>		
						</View>
          	</View>
                	            
        );

    }

}

const styles = StyleSheet.create({
	toggleRow: {
		//Toggle changes
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		overflow: 'hidden',
		padding: 5 ,
		borderBottomColor: '#d3d3d3',
   		borderBottomWidth: .5,
	},
	
	
	toggleText: {
		flex:1,
		paddingLeft: 7.5,
	    color: '#181818',
	    fontSize: 15,
	    
	},
	
	theToggle: {
		paddingRight: 5,
		flex:1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	
});