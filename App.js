import React from 'react';
import {View,Text} from 'react-native';

const App = () => {
  return(
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
      <View style={{ flex: 1, height: 100, backgroundColor: 'yellow'}}></View>
      <View style={{ flex: 1, height: 100, backgroundColor: 'green'}}></View>
    </View>
  );
}

export default App;