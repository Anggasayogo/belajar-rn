import React, { useEffect } from 'react';
import { View, Text} from 'react-native';

const Splash = ({navigation}) =>{
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        },7000)
    })
    return(
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
}

export default Splash;