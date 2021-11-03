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

function List({imc, genero, idade}){

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