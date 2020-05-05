import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Auth = ({navigation}) => {
    return(
        <View style={{ flex: 1,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{maxWidth: 250,marginBottom: 20,fontSize: 20}}>Please Login Or Register for access Todo Apss with Recat native !</Text>
            <TouchableOpacity style={styles.touchtwo} onPress={()=>{ navigation.navigate('Login')}}>
                <Text style={{textAlign: "center",color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
                <Text style={{textAlign: "center",color: 'white'}}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    touch : {height: 50,marginTop: 10 ,width: 300,justifyContent: 'center', backgroundColor: 'purple',borderColor: 'gray',borderRadius: 30},
    touchtwo : {height: 50, width: 300,justifyContent: 'center', backgroundColor: 'purple',borderColor: 'gray',borderRadius: 30}
}

export default Auth;