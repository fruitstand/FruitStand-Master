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
					
						<View style={styles.inneritem1}>
							<Switch 
								value={this.props.On}
								onValueChange={() => {
									
									this.props.changeToggle(this.props.fruit,this.props.On);
								} }/>		
						</View>
          	</View>
                	            
        );

    }

}

const styles = StyleSheet.create({
	toggleRow: {
		//Toggle changes
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		width: '100%',
	    height: 35 
	},
	
	
	toggleText: {
		paddingLeft: 15,
	    color: '#181818',
	    fontSize: 15,
	    textAlign: 'left',
		width: '100%',
		alignItems: 'center',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	},
	
});