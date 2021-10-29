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
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grave.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grave.texto, color: Tabela(result).adultos.grave.color,
      normal: Tabela(result).adultos.grave.faixa, def: (peso - Tabela(result).adultos.grave.normal),  
      grave : {color:Tabela(result).adultos.grave.color, fontWeight:Tabela(result).adultos.grave.fontWeight}}}) : '';
  
    }else if(result > 15.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.moderado.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.moderado.texto, color: Tabela(result).adultos.moderado.color,
      normal: Tabela(result).adultos.moderado.faixa, def: (peso - Tabela(result).adultos.moderado.normal), 
      moderado : {color:Tabela(result).adultos.moderado.color, fontWeight:Tabela(result).adultos.moderado.fontWeight}}}) : '';
      
    }else if(result > 16.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.leve.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.leve.texto, color: Tabela(result).adultos.leve.color,
      normal: Tabela(result).adultos.leve.faixa, def: (peso - Tabela(result).adultos.leve.normal), 
      leve : {color:Tabela(result).adultos.leve.color, fontWeight:Tabela(result).adultos.leve.fontWeight}}}) : '';
      
    }else if(result > 18.4 && result < 25.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.saudavel.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.saudavel.texto, color: Tabela(result).adultos.saudavel.color,
      normal: Tabela(result).adultos.saudavel.faixa, def: (peso - Tabela(result).adultos.saudavel.normal), 
      saudavel : {color:Tabela(result).adultos.saudavel.color, fontWeight:Tabela(result).adultos.saudavel.fontWeight}}}) : '';
     
    }else if(result > 24.9 && result < 30.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.sobrepeso.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.sobrepeso.texto, color: Tabela(result).adultos.sobrepeso.color,
      normal: Tabela(result).adultos.sobrepeso.faixa, def: (peso - Tabela(result).adultos.sobrepeso.normal), 
      sobrepeso : {color:Tabela(result).adultos.sobrepeso.color, fontWeight:Tabela(result).adultos.sobrepeso.fontWeight}}}) : '';
  
    }else if(Tabela(result).adultos.grauUm.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauUm.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauUm.texto, color: Tabela(result).adultos.grauUm.color,
      normal: Tabela(result).adultos.grauUm.faixa, def: (peso - Tabela(result).adultos.grauUm.normal), 
      grauUm : {color:Tabela(result).adultos.grauUm.color, fontWeight: Tabela(result).adultos.grauUm.fontWeight}, 
      }}) : '';
  
    }else if(result > 34.9 && result < 40.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauDois.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauDois.texto, color: Tabela(result).adultos.grauDois.color,
      normal: Tabela(result).adultos.grauDois.faixa, def: (peso - Tabela(result).adultos.grauDois.normal), 
      grauDois : {color:Tabela(result).adultos.grauDois.color, fontWeight: Tabela(result).adultos.grauDois.fontWeight},
      }}) : '';
  
    }else if(Tabela(result).adultos.grauTres.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauTres.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauTres.texto, color: Tabela(result).adultos.grauTres.color,
      normal: Tabela(result).adultos.grauTres.faixa, def: (peso - Tabela(result).adultos.grauTres.normal), 
      grauTres : {color: Tabela(result).adultos.grauTres.color, fontWeight:Tabela(result).adultos.grauTres.fontWeight},
      }}) : '';
      }
    }
  
  }