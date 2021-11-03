import React, {useContext, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';
import { RFPercentage } from "react-native-responsive-fontsize";
import Svg, { Path, Text as SvgText, G } from 'react-native-svg'

import { ValidContext } from '../../context/'
import { Tabela } from '../../api/db/'
import { Validate } from '../../api/interface/'
import Bar from '../bar/'


function SpeedMeter ({route, navigation}) {

  const { state: {value, categoria}, dispatch } = useContext(ValidContext)
  const { name, risco, color, normal, def,  grave, moderado, leve, saudavel, 
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
      outputRange: ['0deg', '0deg']
      
  })

  return (

<View style={styles.container}>

      <Bar />
  
    <View style={styles.containerAnimed} >

      <View style={styles.speedStyle}>

      <Svg width="100%" height="100%" viewBox="0 0 132 132" preserveAspectRatio="xMidYMax meet">
      <G transform="translate(-172,-120)"> 
        <Path fill="rgb(50,205,50)" d="M 118.28 264.863 C 117.677 237.109 132.412 197.038 152.273 180.24 L 193.345 223.082 C 180.244 237.035 175.587 259.296 177.057 265.571 L 118.28 264.863 Z"/>
        <Path fill="rgb(255,215,0)" d="M 152.973 179.391 L 193.954 222.223 C 211.162 204.535 231.025 204.453 237.213 204.436 L 237.273 144.387 C 207.749 143.577 176.734 154.694 152.973 179.391 Z"/>
        <Path fill="rgb(255, 0, 0)" d="M 280.534 180.675 C 279.931 208.429 293.036 244.152 314.636 265.298 L 357.059 223.807 C 342.445 209.706 339.268 191.567 339.311 181.475 L 280.534 180.675 Z" transform="matrix(-1, 0, 0, -1, 637.573059, 445.972992)"/>
        <Path fill="rgb(255, 140, 0)" d="M 238.384 185.723 L 280.716 144.242 C 294.047 157.486 310.636 160.584 322.045 161.064 L 321.912 221.306 C 289.556 219.03 263.459 209.846 238.384 185.723 Z" transform="matrix(-1, 0, 0, -1, 560.429016, 365.548004)"/>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.341878, -0.939744, 0.939744, 0.341878, -64.588371, 288.816345)" x="117.293" y="172.115">BAIXO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.921104, -0.389316, 0.389316, 0.921104, 5.641595, 60.816177)" x="118.293" y="172.115">MÉDIO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.923597, 0.383365, -0.383365, 0.923597, 225.360291, -41.276188)" x="115.293" y="172.115">ALTO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.356224, 0.934401, -0.934401, 0.356224, 447.123962, 38.390083)" x="107.293" y="172.115">CRÍTICO</SvgText>
      </G>
      </Svg>
      </View>

      <View style={styles.absoluteResult}>
        <Text style={{fontWeight:'bold',fontSize: RFPercentage(1.8)}}>IMC</Text>
        <Text style={{fontWeight:'bold', fontSize: RFPercentage(5)}}>{imc}</Text>
        <Text style={{fontWeight:'bold',fontSize: RFPercentage(1.8), color:color}}>{risco}</Text>
      </View>

    </View>

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

    <View style={styles.containerResult} >

    <View style={styles.speedResultList} >

    <View style={styles.speedResultText}><Text style={[{fontWeight:'bold'},styles.textList]}>Categoria</Text> 
    <Text style={[{fontWeight:'bold'},styles.textList]}>Diferença</Text></View>

    <View style={styles.speedResultText}><Text style={{fontWeight:'bold',fontSize: RFPercentage(3), color:color}}>{name}</Text> 
    <Text style={{fontWeight:'bold',fontSize: RFPercentage(3), color:color}}>{saudavel ?  <Icon name="check" style={styles.icon} /> : (def).toFixed(1)+" kg"}</Text></View>

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

    </View>

        <View style={styles.footer}>

        <View style={styles.borderLineStyle}></View>

        <View style={styles.speedResultText}><Text style={[styles.textList, {}]}>Peso normal</Text> 
        <Text style={[styles.textList, {}]}>{normal}</Text></View>    

    </View>      

    </View>

</View>  
  )
};

const styles = EStylesheet.create({
  container:{
    height:'100%', 
    backgroundColor:'rgb(255, 255, 255)'
  },
  containerAnimed:{
    height:'30%' 
  },
  containerResult:{
    margin: '5%',
    height:'57%', 
  },
  footer:{
    position: 'absolute',
    height:'18%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  speedStyle:{
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  cicleStyle:{
    width: '100%',
    height: '30%',
    top: '22%',
    position:'absolute',
    alignSelf: 'center',
  },
  speedResultList:{
    minHeight:'50%',
  },
  absoluteResult:{
    left:0, 
    right:0, 
    bottom:0, 
    position:'absolute', 
    alignItems:'center',
    zIndex: 1
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
  icon:{
    fontSize: RFPercentage(4),
  },
  borderLineStyle:{
    borderBottomColor:'rgb(0, 0, 0)', 
    borderBottomWidth: RFPercentage(0.1), 
    marginTop: '3%',
    marginBottom:'3%', 
  },
});

EStylesheet.build()

export default SpeedMeter;