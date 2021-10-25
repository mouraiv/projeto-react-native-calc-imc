import React, {useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

import { ValidContext } from '../../context/'
import Svg, { Path } from 'react-native-svg';
import Speed from '../../assets/speed.svg'
import { Validate, Tabela } from '../../component/form/'


function SpeedMeter ({route, navigation}) {

  const { state: {value, categoria}, dispatch } = useContext(ValidContext)
  const { name, color, grave, moderado, leve, saudavel, 
          sobrepeso, grauUm, grauDois, grauTres } = categoria

  const { titulo, imc, idade, genero } = route.params

  let rotateAnimed = new Animated.Value(0)

  
  
  const startRotateAnimed = () =>{
    rotateAnimed.setValue(0)
    Animated.timing(rotateAnimed, {
      toValue: 1,
      duration: 1600,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(({finished})=>{
            Validate(imc, idade, genero, dispatch, finished)
    })
  }

  useEffect(()=>{
    startRotateAnimed()

  },[imc])

  const rotateData = rotateAnimed.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', value+'deg']
      
  })
  
  return (

    <View style={Styles.container}>
      
      <View style={Styles.titleStyle}><Text>{titulo}</Text></View>

      <Text style={Styles.speedResult} >{imc}</Text>

      <Animated.View style={[Styles.cicleStyle,{
          transform: [{rotate: rotateData }]
        }]}>

        <Svg width={'100%'} height={'100%'} viewBox="98 175 170 170">

          <Path d="M301.326,260.553C301.326,295.881,272.688,324.52,237.361,324.52C202.033,324.52,173.394,295.881,173.394,260.553C173.394,256.345,173.8,252.232,174.576,248.251L166.012,238.715L178.219,236.137C187.814,212.922,210.68,196.586,237.361,196.586C272.688,196.586,301.326,225.226,301.326,260.553Z" 
                fill="rgb(255, 255, 255)" 
          />

        </Svg>
        </Animated.View>

      <View style={Styles.speedStyle}><Speed /></View>

      <View style={Styles.speedResultList}>

        <View style={Styles.speedResultText}><Text style={[{fontWeight:'bold'},Styles.textList]}>Categoria</Text> 
        <Text style={[{fontWeight:'bold'},Styles.textList]}>Diferença</Text></View>

        <View style={Styles.speedResultText}><Text style={{fontSize: 20, color:color}}>{name}</Text> 
        <Text style={{fontSize: 20, color:color}}>{}</Text></View>

      <View style={{borderBottomColor:'black', borderBottomWidth:1, marginTop:'5%', marginBottom:'5%'}}></View>

        <View style={Styles.speedResultText}><Text style={[Styles.textList, grave]}>Magreza grave</Text> 
        <Text style={[Styles.textList, grave]}>15.9</Text></View>

        <View style={Styles.speedResultText}><Text style={moderado}>Magreza moderada</Text> 
        <Text style={[Styles.textList, moderado]}>16.0 - 18.4</Text></View>

        <View style={Styles.speedResultText}><Text style={leve}>Magreza leve</Text> 
        <Text style={[Styles.textList, leve]}>17.0 - 18.4</Text></View>

        <View style={Styles.speedResultText}><Text style={saudavel}>Saudável</Text> 
        <Text style={[Styles.textList, saudavel]}>18.5 - 24.9</Text></View>

        <View style={Styles.speedResultText}><Text style={sobrepeso}>Sobrepeso</Text> 
        <Text style={[Styles.textList, sobrepeso]}>25.0 - 29.9</Text></View>

        <View style={Styles.speedResultText}><Text style={grauUm}>{grauUm.name}</Text> 
        <Text style={[Styles.textList, grauUm]}>{grauUm.valor}</Text></View>

        <View style={Styles.speedResultText}><Text style={grauDois}>Obesidade Grau II</Text> 
        <Text style={[Styles.textList, grauDois]}>35.0 - 39.9</Text></View>

        <View style={Styles.speedResultText}><Text style={grauTres}>{}</Text> 
        <Text style={[Styles.textList, grauTres]}>{}</Text></View>

        <View style={{borderBottomColor:'black', borderBottomWidth:1, marginTop:'5%', marginBottom:'5%'}}></View>

        <View style={Styles.speedResultText}><Text style={[Styles.textList, {}]}>vazio</Text> 
        <Text style={[Styles.textList, {}]}>vazio</Text></View>

      </View>  
  
    </View>
  )
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight 
  },
  titleStyle: {
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffffff',
    width:'100%',
    height: "8%",
    
  },
  speedStyle:{
    width: "100%",
    height: "100%",
    marginTop: "10%",
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex:1
  },
  containerAnimed :{
  },
  cicleStyle:{
    top:"16%",
    width: "100%",
    height: "40%",
    position:'absolute',
    alignSelf: 'center',
    zIndex:2
  },
  speedResult:{
    fontSize: 48,
    textAlign:'center',
    marginTop:'32%',
    alignItems: 'center',
    zIndex: 4,
    
  },
  speedResultList:{
    flexDirection:'column',
    padding: "7%",
    width: "100%",
    bottom: 0,
    fontSize: 18,
    position: 'absolute',
    zIndex:3,
  },
  speedResultText:{
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:'2%'
  },
  textList:{
    fontSize: 15,
    color:'black'
  }
});

export default SpeedMeter;