import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login,Splash} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

export default Router;