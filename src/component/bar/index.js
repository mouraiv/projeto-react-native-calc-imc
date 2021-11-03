import React from 'react';
import {
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import EStylesheet from 'react-native-extended-stylesheet';
import { RFPercentage } from "react-native-responsive-fontsize";

function Bar(){
    return(
        <View style={styles.container}>
          
          <View style={styles.containerTitle}><Text style={styles.text}>IMC</Text></View>
          <View><Icon name="md-arrow-undo-sharp" style={styles.icon} /></View>
          
        </View>
        
    )
}

const styles = EStylesheet.create({
    container:{
      flexDirection: 'row',
      padding:'3%',
      justifyContent:'center', 
      backgroundColor:'rgb(60, 179, 113)'
    },
    containerTitle: {
      marginLeft: '8%',
      width: '85%'
    },
    text:{
      fontSize: RFPercentage(3),
      alignSelf:'center',
      fontWeight:'bold',
      color: 'rgb(255, 255, 255)'
    },
    icon:{
      fontSize: RFPercentage(3),
      color: 'rgb(255, 255, 255)'
    },
})

EStylesheet.build()

export default Bar;