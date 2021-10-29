import { Tabela } from '../db/'

export function Validate(result, idade, genero, peso, dispatch, finished){
  
    if(idade < 16){
      console.log("ok")
      if(Tabela(result)[genero][idade].grave.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].grave.texto, color: 'rgb(255, 0, 0)', 
        grave : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';
    
      }else if(Tabela(result)[genero][idade].saudavel.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : 0}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].saudavel.texto, color: 'rgb(50,205,50)',
        saudavel : {color:'rgb(50,205,50)', fontWeight:'bold'}}}) : '';
       
      }else if(Tabela(result)[genero][idade].sobrepeso.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].sobrepeso.texto, color: 'rgb(255, 140, 0)',
        sobrepeso : {color:'rgb(255, 140, 0)', fontWeight:'bold'}}}) : '';
    
      }else if(Tabela(result)[genero][idade].grauUm.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : 99}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].grauUm.texto, color: 'rgb(255, 140, 0)',
        grauUm : {color:'rgb(255, 140, 0)', fontWeight:'bold'}, 
        }}) : '';
    
      }
     
    }else{
  
    if(result < 16.0){
      dispatch({ type: 'UPDATE_VALUE', payload : 145}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grave.texto, color: 'rgb(255, 0, 0)',
      normal: '66.7 - 90.0 kg', def: (peso - 66.7), 
      grave : {color:'rgb(255, 0, 0)', fontWeight:'bold'}}}) : '';
  
    }else if(result > 15.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.moderado.texto, color: 'rgb(255,215,0)',
      normal: '66.7 - 90.0 kg', def: (peso - 66.7),
      moderado : {color:'rgb(255,215,0)', fontWeight:'bold'}}}) : '';
      
    }else if(result > 16.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : 50}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.leve.texto, color: 'rgb(255,215,0)',
      normal: '66.7 - 90.0 kg', def: (peso - 66.7),
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