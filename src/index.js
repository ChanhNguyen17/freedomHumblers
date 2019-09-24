import React from 'react';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {createStackNavigator} from 'react-navigation';
import Store from './store';

import {Home} from './templates/home';
import {Browse, Details} from './templates/browse';
import {Search} from './templates/search';


export default class Setup extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    // load the requirement fonts
    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require("../node_modules/native-base/Fonts/Ionicons.ttf")
        });
        this.setState({isReady: true});
    }

    render() {
        if(this.state.isReady){
            return (
                <Provider store={Store}>
                    <AppNavigator/>
                </Provider>
            );
        }
        return(<AppLoading/>);
    }
}

// app navigator between home, details, browse, search
const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Details: { screen: Details },
    Browse: { screen: Browse },
    Search: { screen: Search }
}, { headerMode: 'none' });
