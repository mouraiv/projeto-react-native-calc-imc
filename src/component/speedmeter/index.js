import React, {useContext, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';

import { ValidContext } from '../../context/'
import Svg, { Path, Text as SvgText } from 'react-native-svg'
import { Validate, Tabela } from '../../component/form/'

function SpeedMeter ({route, navigation}) {

  const { state: {value, categoria}, dispatch } = useContext(ValidContext)
  const { name, color, normal, def,  grave, moderado, leve, saudavel, 
          sobrepeso, grauUm, grauDois, grauTres } = categoria

  const { titulo, imc, idade, genero, peso } = route.params


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

  return (

<ScrollView>
  <SafeAreaView style={styles.safeAreaContainer}>

    <View style={styles.container}>
      
      <View style={styles.titleStyle}><Text>{titulo}</Text></View>

      <Text style={styles.speedResult} >{imc}</Text>

      <Animated.View style={[styles.cicleStyle,{
          transform: [{rotate: rotateData }]
        }]}>

        <Svg width="100%" height="100%" viewBox="147 176 155 170">

          <Path d="M301.326,260.553C301.326,295.881,272.688,324.52,237.361,324.52C202.033,324.52,173.394,295.881,173.394,260.553C173.394,256.345,173.8,252.232,174.576,248.251L166.012,238.715L178.219,236.137C187.814,212.922,210.68,196.586,237.361,196.586C272.688,196.586,301.326,225.226,301.326,260.553Z" 
                fill="rgb(255, 255, 255)" 
          />

        </Svg>
        </Animated.View>

      <View style={styles.speedStyle}>

      <Svg width="100%" height="100%" viewBox="99.119 121.146 276.799 226.872">
        <Path fill="rgb(50,205,50)" d="M 118.28 264.863 C 117.677 237.109 132.412 197.038 152.273 180.24 L 193.345 223.082 C 180.244 237.035 175.587 259.296 177.057 265.571 L 118.28 264.863 Z"/>
        <Path fill="rgb(255,215,0)" d="M 152.973 179.391 L 193.954 222.223 C 211.162 204.535 231.025 204.453 237.213 204.436 L 237.273 144.387 C 207.749 143.577 176.734 154.694 152.973 179.391 Z"/>
        <Path fill="rgb(255, 0, 0)" d="M 280.534 180.675 C 279.931 208.429 293.036 244.152 314.636 265.298 L 357.059 223.807 C 342.445 209.706 339.268 191.567 339.311 181.475 L 280.534 180.675 Z" transform="matrix(-1, 0, 0, -1, 637.573059, 445.972992)"/>
        <Path fill="rgb(255, 140, 0)" d="M 238.384 185.723 L 280.716 144.242 C 294.047 157.486 310.636 160.584 322.045 161.064 L 321.912 221.306 C 289.556 219.03 263.459 209.846 238.384 185.723 Z" transform="matrix(-1, 0, 0, -1, 560.429016, 365.548004)"/>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.341878, -0.939744, 0.939744, 0.341878, -64.588371, 288.816345)" x="115.293" y="172.115">BAIXO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.921104, -0.389316, 0.389316, 0.921104, 5.641595, 60.816177)" x="118.293" y="172.115">MÉDIO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.923597, 0.383365, -0.383365, 0.923597, 225.360291, -41.276188)" x="115.293" y="172.115">ALTO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.356224, 0.934401, -0.934401, 0.356224, 447.123962, 38.390083)" x="112.293" y="172.115">CRÍTICO</SvgText>
      </Svg>

      </View>

      <View style={styles.speedResultList}>

        <View style={styles.speedResultText}><Text style={[{fontWeight:'bold'},styles.textList]}>Categoria</Text> 
        <Text style={[{fontWeight:'bold'},styles.textList]}>Diferença</Text></View>

        <View style={styles.speedResultText}><Text style={{fontSize: 20, color:color}}>{name}</Text> 
        <Text style={{fontSize: 20, color:color}}>{saudavel ?  <Icon name="check" size={30} /> : (def).toFixed(1)+" kg"}</Text></View>

      <View style={styles.borderLineStyle}></View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, grave]}>{Tabela(imc)[genero][idade].grave.texto}</Text> : <Text style={[styles.textList, grave]}>{Tabela(imc).adultos.grave.texto}</Text>}
        {idade < 16 ? <Text style={[styles.textList, grave]}> {Tabela(imc)[genero][idade].grave.valor}</Text> : <Text style={[styles.textList, grave]}>{Tabela(imc).adultos.grave.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, moderado]}>{Tabela(imc).adultos.moderado.texto}</Text> }
        {idade < 16 ? null : <Text style={[styles.textList, moderado]}>{Tabela(imc).adultos.moderado.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, leve]}>{Tabela(imc).adultos.leve.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, leve]}>{Tabela(imc).adultos.leve.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, saudavel]}>{Tabela(imc)[genero][idade].saudavel.texto}</Text> : <Text style={[styles.textList, saudavel]}>{Tabela(imc).adultos.saudavel.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, saudavel]}>{Tabela(imc)[genero][idade].saudavel.valor}</Text> : <Text style={[styles.textList, saudavel]}>{Tabela(imc).adultos.saudavel.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, sobrepeso]}>{Tabela(imc)[genero][idade].sobrepeso.texto}</Text> : <Text style={[styles.textList, sobrepeso]}>{Tabela(imc).adultos.sobrepeso.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, sobrepeso]}>{Tabela(imc)[genero][idade].sobrepeso.valor}</Text> : <Text style={[styles.textList, sobrepeso]}>{Tabela(imc).adultos.sobrepeso.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, grauUm]}>{Tabela(imc)[genero][idade].grauUm.texto}</Text> : <Text style={[styles.textList, grauUm]}>{Tabela(imc).adultos.grauUm.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, grauUm]}>{Tabela(imc)[genero][idade].grauUm.valor}</Text> : <Text style={[styles.textList, grauUm]}>{Tabela(imc).adultos.grauUm.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, grauDois]}>{Tabela(imc).adultos.grauDois.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, grauDois]}>{Tabela(imc).adultos.grauDois.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, grauTres]}>{Tabela(imc).adultos.grauTres.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, grauTres]}>{Tabela(imc).adultos.grauTres.valor}</Text>}</View>

      <View style={styles.borderLineStyle}></View>

        <View style={styles.speedResultText}><Text style={[styles.textList, {}]}>Peso normal</Text> 
        <Text style={[styles.textList, {}]}>{normal}</Text></View>

      </View>  
  
    </View>
  </SafeAreaView>
  </ScrollView>  
  )
};

const styles = EStylesheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  titleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
  },
  speedStyle:{
    width: '25.9rem',
    height: '25.9rem',
    marginTop: '3rem',
    alignSelf: 'center',
    position: 'absolute',
    zIndex:2
  },
  cicleStyle:{
    width: '16.3rem',
    height: '16.3rem',
    marginTop: '7.8rem',
    position:'absolute',
    alignSelf: 'center',
    zIndex:3
  },
  speedResult:{
    fontSize: '3rem',
    textAlign:'center',
    marginTop: '9.5rem',
    alignItems: 'center',
    zIndex: 4,
  },
  speedResultList:{
    padding: '2rem',
    height: '24.6rem',
    zIndex:5,
  },
  speedResultText:{
    flexDirection:'row', 
    justifyContent:'space-between',
  },
  textList:{
    fontSize: '1.1rem',
    color:'rgb(0, 0, 0)'
  },
  borderLineStyle:{
    borderBottomColor:'rgb(0, 0, 0)', 
    borderBottomWidth: '0.1rem', 
    marginTop: '1rem', 
    marginBottom:'1rem'
  },
});

EStylesheet.build()

export default SpeedMeter;