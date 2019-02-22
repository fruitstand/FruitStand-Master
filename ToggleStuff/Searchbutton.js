//you dont need to change anything until the style sheet
//cleaned
import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';



export default class Searchbutton extends React.Component {


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View style={styles.component}>

                                <TouchableOpacity 
										style={styles.item1}
										onPress={() => {
											//this.props.navigation.navigate('SearchResultsScreen', {})
											console.log('button works')}
										}
									>
										
										<Text style={styles.item1TouchableOpacity}>
											Search
										</Text>
									
									</TouchableOpacity>

                			</View>

                	            
        );

    }

}

const styles = StyleSheet.create({
	//please change height and width to flex to allow for the measurements to be right on everyones phone
	//because rn this screen will look bad on Luis's POS

	component: {
		//for the entire search box, change the sizing of the bar here (this one is the whole component)
		flexDirection: 'row',
		width: 50,
		//change the height here
	    paddingLeft: 15,
	    paddingRight: 15,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
		width: '100%',
		//change width here
	    height: 91.5,

	},
	
	item1: {
		//change the contents of the box here (i.e. moving where the Search text is)
		backgroundColor: '#1194f6',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
		width: '100%',
		//change width of blue box here
		height: '100%',
		//change hieght of blue box here
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1TouchableOpacity: {
		//change font size here.  idk what else it does 
		//this width is for the text i think so change it if u change font
		color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});