import React from 'react';
import {
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';

function Bar(){
    return(
        <View style={styles.container}><Text>BARRA</Text></View>
    )
}

const styles = EStylesheet.create({
    container:{
      height:'7%', 
      backgroundColor:'rgb(255, 255, 25)'
    }
})

EStylesheet.build()

export default Bar;