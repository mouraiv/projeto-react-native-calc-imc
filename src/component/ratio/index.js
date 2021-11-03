import React, {useContext, useEffect } from 'react';
import {
  Animated,
  Easing
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import Svg, { Path, Text as SvgText, G } from 'react-native-svg'

import { ValidContext } from '../../context/'
import { Validate } from '../../api/interface/'

function Ratio({imc,idade, genero, peso}){
    const { state: {value, categoria}, dispatch } = useContext(ValidContext)

    let rotateAnimed = new Animated.Value(0)

    const startRotateAnimed = () =>{
      rotateAnimed.setValue(0)
      Animated.timing(rotateAnimed, {
        toValue: 1,
        duration: 1600,
        easing: Easing.linear,
        useNativeDriver: false
      }).start(({finished})=>{
              Validate(imc, idade, genero, peso, dispatch, finished)
      
      })
    }
  
    useEffect(()=>{
      startRotateAnimed()
  
    },[imc])
  
    const rotateData = rotateAnimed.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', value+'deg']
        
    })                

    return(
        <Animated.View style={[styles.cicleStyle,{
            transform: [{rotate: rotateData }]
          }]}>
  
          <Svg width="100%" height="100%" viewBox="0 0 135 135" preserveAspectRatio="xMidYMax meet">
            <G transform="translate(-170,-192)" >
            <Path d="M301.326,260.553C301.326,295.881,272.688,324.52,237.361,324.52C202.033,324.52,173.394,295.881,173.394,260.553C173.394,256.345,173.8,252.232,174.576,248.251L166.012,238.715L178.219,236.137C187.814,212.922,210.68,196.586,237.361,196.586C272.688,196.586,301.326,225.226,301.326,260.553Z" 
                  fill="rgb(255, 255, 255)" 
            />
            </G>
          </Svg>
        </Animated.View>
    )
}

const styles = EStylesheet.create({
    cicleStyle:{
        width: '100%',
        height: '30%',
        top: '23%',
        position:'absolute',
        alignSelf: 'center',
      },
})

EStylesheet.build()

export default Ratio;