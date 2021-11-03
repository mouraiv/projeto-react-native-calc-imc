import React, {useContext, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import { RFPercentage } from "react-native-responsive-fontsize";

import { ValidContext } from '../../context/'

function Footer(){
    const { state: {categoria}, } = useContext(ValidContext)
    const {normal} = categoria

    return(
        <View style={styles.footer}>

        <View style={styles.borderLineStyle}></View>

        <View style={styles.speedResultText}><Text style={[styles.textList, {}]}>Peso normal</Text> 
        <Text style={[styles.textList, {}]}>{normal}</Text>
        </View>

        </View>      
    )
}

const styles = EStylesheet.create({
footer:{
    position: 'absolute',
    height:'18%',
    left: '3%',
    right: '3%',
    bottom: 0,
  },
  speedResultText:{
    flexDirection:'row', 
    justifyContent:'space-between',
  },
  textList:{
    fontSize: RFPercentage(2.5),
    color:'rgb(0, 0, 0)',
    paddingBottom:'1.5%',
  },
  borderLineStyle:{
    borderBottomColor:'rgb(0, 0, 0)', 
    borderBottomWidth: RFPercentage(0.1), 
    marginTop: '3%',
    marginBottom:'3%', 
  },  
})

EStylesheet.build()

export default Footer;