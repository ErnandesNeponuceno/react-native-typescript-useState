import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbol from './assets/sol.png'
import symbolOff from './assets/lua.png'

export default function App() {
  const [isActive, setisActive] = useState(false)

  function handleSymbol(){
      setisActive((oldValue: boolean) => {
        return !oldValue
      })
  }

  return (
    <View style={isActive ? styles.container : styles.containerDark}>
      <TouchableOpacity onPress={handleSymbol}>
  
      <Image style={styles.img} source={isActive ? symbol : symbolOff}></Image>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E088',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerDark: {
    flex: 1,
    backgroundColor: '#9BE2F2',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img:{
    width: 250,
    height: 250

  }
  
});


