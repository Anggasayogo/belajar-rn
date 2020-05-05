import React, { useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { AuthBg } from '../../assets';

const Splash = ({navigation}) =>{
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth');
        },4000)
    })
    return(
        <View style={{ flex: 1,justifyContent: 'center', backgroundColor: 'white'}}>
            <Image source={AuthBg} style={{width: 250, height: 300}}/>
            <Text style={{marginTop: 20,textAlign: 'center', fontSize: 20,color: 'purple'}}>Welcome To Splash Screen..</Text>
        </View>
    );
}

export default Splash;