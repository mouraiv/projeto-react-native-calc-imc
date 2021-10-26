import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Tabela = (result) => {

  const data = {

    homens: {
      6 : {
        grave: {
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
        grauUm: {texto: 'Obeso',
        valor: '18.0 ≥',
        condicao: result >= 18.0}
      },
      7 : {
        grave: {
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
        grauUm: {texto: 'Obeso',
        valor: '18.0 ≥',
        condicao: result >= 19.1
        }
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

export function Validate(result, idade, genero, peso, dispatch, finished){
  
  if(idade < 16){
    console.log("ok")
    if(Tabela(result)[genero][idade].grave.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result)[genero][idade].grave.texto, color: 'rgb(255, 0, 0)', 
      grave : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';
      //def(){return "+"+(imc - 25.0)}
  
    }else if(Tabela(result)[genero][idade].saudavel.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : 0}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result)[genero][idade].saudavel.texto, color: 'rgb(50,205,50)',
      saudavel : {color:'rgb(50,205,50)', fontWeight:'bold'}}}) : '';
      //def(){return "+"+(imc - 25.0)}
     
    }else if(Tabela(result)[genero][idade].sobrepeso.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result)[genero][idade].sobrepeso.texto, color: 'rgb(255, 140, 0)',
      sobrepeso : {color:'rgb(255, 140, 0)', fontWeight:'bold'}}}) : '';
      //def(){return "+"+(imc - 25.0)}
  
    }else if(Tabela(result)[genero][idade].grauUm.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result)[genero][idade].grauUm.texto, color: 'rgb(255, 140, 0)',
      grauUm : {color:'rgb(255, 140, 0)', fontWeight:'bold'}, 
      }}) : '';
      //def(){return "+"+(imc - 25.0)}
  
    }
   
  }else{

  if(result < 16.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grave.texto, color: 'rgb(255, 0, 0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0), 
    grave : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';

  }else if(result > 15.9 && result < 18.5){
    dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.moderado.texto, color: 'rgb(255,215,0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    moderado : {color:'rgb(255,215,0)', fontWeight:'bold'}}}) : '';
    
  }else if(result > 16.9 && result < 18.5){
    dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.leve.texto, color: 'rgb(255,215,0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    leve : {color:'rgb(255,215,0)', fontWeight:'bold'}}}) : '';
    
  }else if(result > 18.4 && result < 25.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 0}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.saudavel.texto, color: 'rgb(50,205,50)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    saudavel : {color:'rgb(50,205,50)', fontWeight:'bold'}}}) : '';
   
  }else if(result > 24.9 && result < 30.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.sobrepeso.texto, color: 'rgb(255, 140, 0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    sobrepeso : {color:'rgb(255, 140, 0)', fontWeight:'bold'}}}) : '';

  }else if(Tabela(result).adultos.grauUm.condicao){
    dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grauUm.texto, color: 'rgb(255, 140, 0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    grauUm : {color:'rgb(255, 140, 0)', fontWeight:'bold'}, 
    }}) : '';

  }else if(result > 34.9 && result < 40.0){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grauDois.texto, color: 'rgb(255, 0, 0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0),
    grauDois : {color:'rgb(255, 0, 0)', fontWeight:'bold'},
    }}) : '';

  }else if(Tabela(result).adultos.grauTres.condicao){
    dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
    finished ? dispatch({ type: 'UPDATE_NIVEL', 
    payload : { name: Tabela(result).adultos.grauTres.texto, color: 'rgb(255, 0, 0)',
    normal: '66.7 - 90.0 kg', def: (peso - 90.0), 
    grauTres : {color:'rgb(255, 0, 0)', fontWeight:'bold'},
    }}) : '';
    }
  }

}

export default function Form ({ navigation }) {

  const [altura, setAltura] = useState()
  const [idade, setIdade] = useState()
  const [genero, setGenero] = useState()
  const [peso, setPeso] = useState()
  const [result, setResult] = useState(0)
  const [valid, setValid] = useState({
    idade : '',  
    altura : '', 
    peso : ''
  })

  const calcImc = () =>{
    const imc = (peso / (altura * altura))
    setResult(imc.toFixed(1))
    console.log((imc - 29).toFixed(1))
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
    navigation.navigate('SpeedMeter', {
      titulo : 'CALCULADORA IMC PRO',
      imc: result,
      idade: idade,
      genero: genero,
      peso: peso
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
          <Button title='Calcular' onPress={()=>{
            validateForms()
            calcImc()
          
          }}/>
        </View>
        
    </View>
  )
};