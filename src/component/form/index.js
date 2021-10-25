import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { ValidContext } from '../../context/'

export const Tabela = (result) => {

  const data = {

    homens: {
      6 : {
        magro: {
          texto: 'Abaixo do peso',
          valor: '≤ 14.4',
          condicao: result <= 14.4
        },
        saudavel: {
          texto: 'Saudavél',
          valor: '14.5 - 16.5',
          condicao: result >= 14.5 && result < 16.6
        },
        sobrepeso: {
          texto: 'Sobrepeso',
          valor: '16.6 - 18.0 ',
          condicao: result > 16.5 && result < 18.0
        },
        Obeso: {texto: 'Obeso',
        valor: '18.0 ≥',
        condicao: result >= 18.0}
      },
      7 : {
        magro: {
          texto: 'Abaixo do peso',
          valor: '≤ 14.9',
          condicao: result <= 14.9
        },
        saudavel: {
          texto: 'Saudavél',
          valor: '15.0 - 17.2',
          condicao: result >= 15.0 && result < 17.3
        },
        sobrepeso: {
          texto: 'Sobrepeso',
          valor: '17.3 - 19.1 ',
          condicao: result > 17.2 && result < 19.1
        },
        Obeso: {texto: 'Obeso',
        valor: '18.0 ≥',
        condicao: result >= 19.1}
      },
    },    
    mulheres: {
    },
    adultos: {
        grave: {
          texto: 'Magreza grave',
          valor: '≤ 15.9',
          condicao: result < 16.0
        },
        moderado: {
          texto: 'Magreza Moderada',
          valor: '16.0 - 18.4',
          condicao: result > 15.9 && result < 18.5
        },
        leve: {
          texto: 'Magreza Leve',
          valor: '17.0 - 18.4',
          condicao: result > 16.9 && result < 18.5
        },
        saudavel: {
          texto: 'Saudável',
          valor: '18.5 - 24.9',
          condicao: result > 18.4 && result < 25.0
        },
        sobrepeso: {
          texto: 'Sobrepeso',
          valor: '25.0 - 29.9',
          condicao: result > 24.9 && result < 30.0
        },
        grauUm: {
          texto: 'Obesidade Grau I',
          valor: '30.0 - 34.9',
          condicao: result > 29.9 && result < 35.0
        },
        grauDois: {
          texto: 'Obesidade Grau II',
          valor: '35.0 - 39.9',
          condicao: result > 34.9 && result < 40.0
        },
        grauTres: {
          texto: 'Obesidade Grau III',
          valor: '40.0 ≥',
          condicao: result > 39.9
        }
      }
    }
    return data
  }

export function Validate(result, idade, genero, dispatch, finished){

  console.log(Tabela(result)[genero][idade])
  
  if(Tabela(result).homens || Tabela(result).mulheres){
   
  }else{

  if(result < 16.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Magreza Gave', color: 'rgb(255, 0, 0)', 
    grave : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}

  }else if(result > 15.9 && result < 18.5){
    dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Magreza Moderada', color: 'rgb(255,215,0)',
    moderado : {color:'rgb(255,215,0)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}
    
  }else if(result > 16.9 && result < 18.5){
    dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Magreza Leve', color: 'rgb(255,215,0)',
    leve : {color:'rgb(255,215,0)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}
    
  }else if(result > 18.4 && result < 25.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 0}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Saudável', color: 'rgb(50,205,50)',
    saudavel : {color:'rgb(50,205,50)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}
   
  }else if(result > 24.9 && result < 30.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Sobrepeso', color: 'rgb(255, 140, 0)',
    sobrepeso : {color:'rgb(255, 140, 0)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}

  }else if(Tabela(result).adultos.grauUm.condicao){
    dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grauUm.texto, color: 'rgb(255, 140, 0)',
    grauUm : {color:'rgb(255, 140, 0)', fontWeight:'bold'}, 
    def(){return "+"+(result - 80)}}}) : '';
    //def(){return "+"+(imc - 25.0)}

  }else if(result > 34.9 && result < 40.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: 'Obesidade Grau II', color: 'rgb(255, 0, 0)',
    grauDois : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';
    //def(){return "+"+(imc - 25.0)}

  }else if(Tabela(result).adultos.grauTres.condicao){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grauTres.texto, color: 'rgb(255, 0, 0)', 
    grauTres : {color:'rgb(255, 0, 0)', fontWeight:'bold'},
    def(){return "+"+(result - 0)}}}) : '';
    //def(){return "+"+(imc - 25.0)}
    }
  }

}

export default function Form ({ navigation }) {

  const { dispatch } = useContext(ValidContext)

  const [altura, setAltura] = useState()
  const [idade, setIdade] = useState()
  const [genero, setGenero] = useState()
  const [peso, setPeso] = useState()
  const [result, setResult] = useState(0)
  const [startNivel, setStartNivel] = useState()
  const [valid, setValid] = useState({
    idade : '',  
    altura : '', 
    peso : ''
  })
  const [button, setbutton] = useState("Calcular IMC")

  const calcImc = () =>{
    const imc = (peso / (altura * altura))
    setResult(imc.toFixed(1))
  }

  const validateForms = () => {
    if(!idade){
      setValid({idade : '*Campo Obrigatório'})
    }else if(!altura){
      setValid({altura : '*Campo Obrigatório'})
    }else if (!peso)
      setValid({peso : '*Campo Obrigatório'})
    else{
      setValid({})
    }

  }

  useEffect(()=>{
  if(result != 0 && !isNaN(result)){
    Validate(result, idade, genero, dispatch)
    //Tabela(result)
    navigation.navigate('SpeedMeter', {
      titulo : 'CALCULADORA IMC PRO',
      imc: result,
      idade: idade,
      genero: genero
    });
    }
  },[result])

  return (
    <View>
        <View>
        <Text>Idade :</Text>
          <Text>{valid.idade}</Text>
          <TextInput
            onChangeText={(text)=>{setIdade(text)}} 
            value={idade} 
            placeholder="Ex.: 22" 
            keyboardType="numeric"
          />
          <TouchableHighlight onPress={()=>{setGenero('homens')}}>
            <View>
                <Icon name="male" size={100} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{setGenero('mulheres')}}>
            <View>
                <Icon name="female" size={100} />
            </View>
          </TouchableHighlight>
          <Text>Altura :</Text>
          <Text>{valid.altura}</Text>
          <TextInput
            onChangeText={(text)=>{setAltura(text.replace(",","."))}} 
            value={altura} 
            placeholder="Ex.: 1.75" 
            keyboardType="numeric"
          />
          <Text>Peso :</Text>
          <Text>{valid.peso}</Text>
          <TextInput
            onChangeText={(text) => {setPeso(text.replace(",","."))}}
            value={peso}  
            placeholder="Ex.: 73.569" 
            keyboardType="numeric"
          />
          <Text>{result}</Text>
          <Text>{startNivel}</Text>
          <Button title={button} onPress={()=>{
            setbutton("CALCULAR NOVAMENTE")
            validateForms()
            calcImc()
          
          }}/>
        </View>
        
    </View>
  )
};