//this is the factory, you wont need to touch anything until the style sheets at the bottom
//this is mildly clean, to change formating for the toggles go down to the style sheets.  Use one of the 10
import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	Switch,
} from 'react-native';

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
													console.log(this.props.fruit, 'toggle works');
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



//everything under this is important, knock yourselves out


const styles = StyleSheet.create({
	//have fun chagning this shit, ill leave comments on what does what.  Use flex to make everything pixel perfect for
	//all phones
	component: {
		//the whole toggle area
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 118.5,
	},
	
	itemcontainer1: {
		//i dont think this does anything
		width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
		//also useless i think
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
		//Ive got no clue what this does but it does something
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1Text: {
	    color: '#181818',
	    fontSize: 30,
	    textAlign: 'left',
	    width: '100%',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 13.5,
	    left: '53.66795366795367%',
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