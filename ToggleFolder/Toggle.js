import React from 'react';
import { StyleSheet, View, Text, Switch,} 
from 'react-native';
export default class Toggle extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            state_ID__fruitToggle: false,
        }
    }

    render() {
        

        return (

            <View style={styles.component}>

                	<View style={styles.layout1}>

                                <View style={styles.item1}>
										<Text 
											style={styles.item1Text}
										>
											{this.props.fruit}

										</Text>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item2}>
											<Switch 
												value={this.state.state_ID__fruitToggle}
												onValueChange={(val) => {
													this.setState({ state_ID__fruitToggle : val });
												}
											}

											/>
										</View>

                			</View>

                		</View>

                	</View>
                	            
        );

    }

}

const styles = StyleSheet.create({
	component: {
		//Toggle changes
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 15,
	    paddingRight: 8,
	    paddingTop: 9,
	    paddingBottom: 10,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 100,
	},
	
	itemcontainer1: {

		width: '100%',
	    height: '100%',
	    paddingTop: 8.5,
	    paddingBottom: 8.5,
	    paddingLeft: 8.5,
	    paddingRight: 8.5,
	},
	
	itemcontainer1Inner: {

	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {

	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1Text: {
	    color: '#181818',
	    fontSize: 15,
	    textAlign: 'left',
	    width: '100%',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 13.5,
	    left: '50%',
	    width: '50%',
	    height: 75,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
});