import React from 'react';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Store from './store';

import {Home} from './templates/home';
import {Settings} from './templates/settings';

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

const MainNavigator = createDrawerNavigator({
        Home: {screen: Home},
        Settings: {screen: Settings}
    }
);

const AppNavigator = createStackNavigator({
        Main: { screen: MainNavigator }
    }, { headerMode: 'none' });
