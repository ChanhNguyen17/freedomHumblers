import React from 'react';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
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

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
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

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Details: { screen: Details },
    Browse: { screen: Browse },
    Search: { screen: Search }
    }, { headerMode: 'none' });
