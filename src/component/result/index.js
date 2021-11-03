import React, {useContext, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import { RFPercentage } from "react-native-responsive-fontsize";

import { ValidContext } from '../../context/'

function Result({imc}){
    const { state: {categoria},} = useContext(ValidContext)
    const {risco, color} = categoria

    return(
        <View style={styles.absoluteResult}>
            <Text style={{fontWeight:'bold',fontSize: RFPercentage(1.8)}}>IMC</Text>
            <Text style={{fontWeight:'bold', fontSize: RFPercentage(5)}}>{imc}</Text>
            <Text style={{fontWeight:'bold',fontSize: RFPercentage(1.8), color:color}}>{risco}</Text>
        </View>
    )
}

const styles = EStylesheet.create({
    absoluteResult:{
        left:0, 
        right:0, 
        bottom:0, 
        position:'absolute', 
        alignItems:'center',
        zIndex: 1
      },
})

EStylesheet.build()

export default Result;