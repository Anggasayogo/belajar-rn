import React from 'react';
import {View,Text,TouchableOpacity, ImageBackground,TextInput} from 'react-native';
// import scrollview

const App = () => {
  const state = {
    text: ''
  };
  return(
    <View style={styles.wrapper}>
      <ImageBackground style={styles.wraperImageBackground} source={require('./assets/hero_1.jpg')}>
        <Text style={styles.title}>Its. Simply Login</Text>
        <View style={styles.boxInputOne}>
        <TextInput placeholder=' Input Email' style={styles.textinpt}/>
        </View>
        <View style={styles.boxInput}>
        <TextInput placeholder=' Input Password' style={styles.textinpt}/>
        </View>
        <View style={styles.wrapperTouch}>
          <TouchableOpacity style={styles.touch} onPress={()=> alert('hello angga gamteng')} >
            <Text style={{textAlign: 'center', color: 'white'}}>TouchMe!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = {
  wrapper : {
    flex: 1,
    flexDirection: 'row',
  },
  wraperImageBackground : {flex: 1,
    resizeMode:'cover',
    justifyContent: 'center'
  },
  textinpt : { height: 40,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 30
  },
  wrapperTouch : { marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'purple'
  },
  touch : {height: 40,
    borderColor: 'gray',
    borderRadius: 30,
    justifyContent: 'center'
  },
  title :{ textAlign: "center",
  paddingVertical: 20,
  color: 'purple',
  fontSize: 25
  },
  boxInput : { marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 30
  },
  boxInputOne : { marginHorizontal: 30,borderRadius: 30}
}

export default App;