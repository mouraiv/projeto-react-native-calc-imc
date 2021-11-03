import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Foundation';

import { Validate } from '../../api/interface/'
import { ValidContext } from '../../context/'

function Form ({ navigation }){ 

  const { dispatch } = useContext(ValidContext)

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
    Validate(result, idade, genero, peso, dispatch)
    navigation.navigate('Imc', {
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
      <ScrollView>
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
        </ScrollView>
    </View>
  )
};

export default Form;