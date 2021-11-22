import React, {useContext} from 'react';
import {
  View,
  Text,
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';
import { RFPercentage } from "react-native-responsive-fontsize";

import { ValidContext } from '../../context/'
import { Tabela } from '../../api/db/'

function List({genero, idade}){

  const { state: {categoria},} = useContext(ValidContext)
  const { name, color, def,  grave, moderado, leve, saudavel, 
          sobrepeso, grauUm, grauDois, grauTres } = categoria

  return(
    <View style={styles.speedResultList} >

    <View style={styles.speedResultText}><Text style={[{fontWeight:'bold'},styles.textList]}>Categoria</Text> 
    <Text style={[{fontWeight:'bold'},styles.textList]}>Diferença</Text></View>

    <View style={styles.speedResultText}><Text style={{fontWeight:'bold',fontSize: RFPercentage(3), color:color}}>{name}</Text> 
    <Text style={{fontWeight:'bold',fontSize: RFPercentage(3), color:color}}>{saudavel ?  <Icon name="check" style={styles.icon} /> : (def).toFixed(1)+" kg"}</Text></View>

    <View style={styles.borderLineStyle}></View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, grave]}>{Tabela()[genero][idade].grave.texto}</Text> : <Text style={[styles.textList, grave]}>{Tabela().adultos.grave.texto}</Text>}
        {idade < 16 ? <Text style={[styles.textList, grave]}> {Tabela()[genero][idade].grave.valor}</Text> : <Text style={[styles.textList, grave]}>{Tabela().adultos.grave.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, moderado]}>{Tabela().adultos.moderado.texto}</Text> }
        {idade < 16 ? null : <Text style={[styles.textList, moderado]}>{Tabela().adultos.moderado.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, leve]}>{Tabela().adultos.leve.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, leve]}>{Tabela().adultos.leve.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, saudavel]}>{Tabela()[genero][idade].saudavel.texto}</Text> : <Text style={[styles.textList, saudavel]}>{Tabela().adultos.saudavel.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, saudavel]}>{Tabela()[genero][idade].saudavel.valor}</Text> : <Text style={[styles.textList, saudavel]}>{Tabela().adultos.saudavel.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, sobrepeso]}>{Tabela()[genero][idade].sobrepeso.texto}</Text> : <Text style={[styles.textList, sobrepeso]}>{Tabela().adultos.sobrepeso.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, sobrepeso]}>{Tabela()[genero][idade].sobrepeso.valor}</Text> : <Text style={[styles.textList, sobrepeso]}>{Tabela().adultos.sobrepeso.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? <Text style={[styles.textList, grauUm]}>{Tabela()[genero][idade].grauUm.texto}</Text> : <Text style={[styles.textList, grauUm]}>{Tabela().adultos.grauUm.texto}</Text>} 
        {idade < 16 ? <Text style={[styles.textList, grauUm]}>{Tabela()[genero][idade].grauUm.valor}</Text> : <Text style={[styles.textList, grauUm]}>{Tabela().adultos.grauUm.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, grauDois]}>{Tabela().adultos.grauDois.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, grauDois]}>{Tabela().adultos.grauDois.valor}</Text>}</View>

        <View style={styles.speedResultText}>{idade < 16 ? null : <Text style={[styles.textList, grauTres]}>{Tabela().adultos.grauTres.texto}</Text>} 
        {idade < 16 ? null : <Text style={[styles.textList, grauTres]}>{Tabela().adultos.grauTres.valor}</Text>}</View>

    </View>    
  )

}

const styles = EStylesheet.create({
  speedResultList:{
    minHeight:'50%',
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
})

EStylesheet.build()

export default List; 