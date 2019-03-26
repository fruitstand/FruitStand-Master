import React from 'react';
import { StyleSheet, View, ScrollView,} 
from 'react-native';

import Searchbutton from './Searchbutton';
import Toggle from './Toggle';

export default class ToggleScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            SearchbuttonVisible: true,
            ToggleVisible: true,
        }

    }
    render() {
        return (
            
            <View style={styles.container}>

                <ScrollView style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                        <Searchbutton 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            visible={ this.state.SearchbuttonVisible }
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Apples'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Oranges'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Grapes'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Strawberries'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Lemons'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Limes'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Peaches'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Nectarines'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Blackberries'
                        />
                        <Toggle 
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            fruit = 'Blueberries'
                        />
                        {/*How to make a new toggle:
                        STEP 1.  Copy this:
                                            <Toggle 
                                                toggleComponent={ (component) => this.toggleComponent(component) }
                                                fruit = 'orange'
                                            />
                        STEP 2. Change the fruit to whatever you want 
                                    example: fruit = 'grapes'
                                    
                        STEP 3. Put everything under the existing lines, make sure that you have enough of these />
                        
                        STEP 4. Eat some bagels 
                        */}

                    </View>

                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});


