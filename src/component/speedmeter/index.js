import React, {useContext, useEffect } from 'react';
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
        <Text style={{fontSize: 20, color:color}}>{def+".0 kg"}</Text></View>

      <View style={{borderBottomColor:'black', borderBottomWidth:1, marginTop:'5%', marginBottom:'5%'}}></View>

        <View style={Styles.speedResultText}>{idade < 16 ? <Text style={[Styles.textList, grave]}>{Tabela(imc)[genero][idade].grave.texto}</Text> : <Text style={[Styles.textList, grave]}>{Tabela(imc).adultos.grave.texto}</Text>}
        {idade < 16 ? <Text style={[Styles.textList, grave]}> {Tabela(imc)[genero][idade].grave.valor}</Text> : <Text style={[Styles.textList, grave]}>{Tabela(imc).adultos.grave.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? null : <Text style={[Styles.textList, moderado]}>{Tabela(imc).adultos.moderado.texto}</Text> }
        {idade < 16 ? null : <Text style={[Styles.textList, moderado]}>{Tabela(imc).adultos.moderado.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? null : <Text style={[Styles.textList, leve]}>{Tabela(imc).adultos.leve.texto}</Text>} 
        {idade < 16 ? null : <Text style={[Styles.textList, leve]}>{Tabela(imc).adultos.leve.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? <Text style={[Styles.textList, saudavel]}>{Tabela(imc)[genero][idade].saudavel.texto}</Text> : <Text style={[Styles.textList, saudavel]}>{Tabela(imc).adultos.saudavel.texto}</Text>} 
        {idade < 16 ? <Text style={[Styles.textList, saudavel]}>{Tabela(imc)[genero][idade].saudavel.valor}</Text> : <Text style={[Styles.textList, saudavel]}>{Tabela(imc).adultos.saudavel.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? <Text style={[Styles.textList, sobrepeso]}>{Tabela(imc)[genero][idade].sobrepeso.texto}</Text> : <Text style={[Styles.textList, sobrepeso]}>{Tabela(imc).adultos.sobrepeso.texto}</Text>} 
        {idade < 16 ? <Text style={[Styles.textList, sobrepeso]}>{Tabela(imc)[genero][idade].sobrepeso.valor}</Text> : <Text style={[Styles.textList, sobrepeso]}>{Tabela(imc).adultos.sobrepeso.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? <Text style={[Styles.textList, grauUm]}>{Tabela(imc)[genero][idade].grauUm.texto}</Text> : <Text style={[Styles.textList, grauUm]}>{Tabela(imc).adultos.grauUm.texto}</Text>} 
        {idade < 16 ? <Text style={[Styles.textList, grauUm]}>{Tabela(imc)[genero][idade].grauUm.valor}</Text> : <Text style={[Styles.textList, grauUm]}>{Tabela(imc).adultos.grauUm.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? null : <Text style={[Styles.textList, grauDois]}>{Tabela(imc).adultos.grauDois.texto}</Text>} 
        {idade < 16 ? null : <Text style={[Styles.textList, grauDois]}>{Tabela(imc).adultos.grauDois.valor}</Text>}</View>

        <View style={Styles.speedResultText}>{idade < 16 ? null : <Text style={[Styles.textList, grauTres]}>{Tabela(imc).adultos.grauTres.texto}</Text>} 
        {idade < 16 ? null : <Text style={[Styles.textList, grauTres]}>{Tabela(imc).adultos.grauTres.valor}</Text>}</View>

      <View style={{borderBottomColor:'black', borderBottomWidth:1, marginTop:'5%', marginBottom:'5%'}}></View>

        <View style={Styles.speedResultText}><Text style={[Styles.textList, {}]}>Peso normal</Text> 
        <Text style={[Styles.textList, {}]}>{normal}</Text></View>

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
  },
  textList:{
    fontSize: 16,
    color:'black'
  }
});

export default SpeedMeter;