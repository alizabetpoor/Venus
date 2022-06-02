import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from '../App';
import Splash from '../views/splash';

const Routes = createStackNavigator(
    {
        Splash: {screen: Splash},
        Main: {screen: App},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
    },
);
export default createAppContainer(Routes);
