import { Tabela } from '../db/'

export function Validate(result, idade, genero, peso, dispatch, finished){
  
    if(idade < 16){
      console.log("ok")
      if(Tabela(result)[genero][idade].grave.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result)[genero][idade].grave.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].grave.texto, risco: Tabela(result)[genero][idade].grave.risco, color: Tabela(result)[genero][idade].grave.color,
        normal: Tabela(result)[genero][idade].grave.faixa, def: (peso - Tabela(result)[genero][idade].grave.normal),  
        grave : {color:Tabela(result)[genero][idade].grave.color, fontWeight: Tabela(result)[genero][idade].grave.fontWeight}, 
        }}) : '';
    
      }else if(Tabela(result)[genero][idade].saudavel.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result)[genero][idade].saudavel.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].saudavel.texto, risco: Tabela(result)[genero][idade].saudavel.risco, color: Tabela(result)[genero][idade].saudavel.color,
        normal: Tabela(result)[genero][idade].saudavel.faixa, def: (peso - Tabela(result)[genero][idade].saudavel.normal),  
        saudavel : {color:Tabela(result)[genero][idade].saudavel.color, fontWeight: Tabela(result)[genero][idade].saudavel.fontWeight}, 
        }}) : '';
       
      }else if(Tabela(result)[genero][idade].sobrepeso.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result)[genero][idade].sobrepeso.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].sobrepeso.texto, risco: Tabela(result)[genero][idade].sobrepeso.risco, color: Tabela(result)[genero][idade].sobrepeso.color,
        normal: Tabela(result)[genero][idade].sobrepeso.faixa, def: (peso - Tabela(result)[genero][idade].sobrepeso.normal),  
        sobrepeso : {color:Tabela(result)[genero][idade].sobrepeso.color, fontWeight: Tabela(result)[genero][idade].sobrepeso.fontWeight}, 
        }}) : '';
    
      }else if(Tabela(result)[genero][idade].grauUm.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result)[genero][idade].grauUm.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela(result)[genero][idade].grauUm.texto, risco: Tabela(result)[genero][idade].grauUm.risco, color: Tabela(result)[genero][idade].grauUm.color,
        normal: Tabela(result)[genero][idade].grauUm.faixa, def: (peso - Tabela(result)[genero][idade].grauUm.normal),  
        grauUm : {color:Tabela(result)[genero][idade].grauUm.color, fontWeight: Tabela(result)[genero][idade].grauUm.fontWeight}, 
        }}) : '';
    
      }
     
    }else{
  
    if(result < 16.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grave.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grave.texto, risco:Tabela(result).adultos.grave.risco, color: Tabela(result).adultos.grave.color,
      normal: Tabela(result).adultos.grave.faixa, def: (peso - Tabela(result).adultos.grave.normal),  
      grave : {color:Tabela(result).adultos.grave.color, fontWeight:Tabela(result).adultos.grave.fontWeight}}}) : '';
  
    }else if(result > 15.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.moderado.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.moderado.texto, risco:Tabela(result).adultos.moderado.risco, color: Tabela(result).adultos.moderado.color,
      normal: Tabela(result).adultos.moderado.faixa, def: (peso - Tabela(result).adultos.moderado.normal), 
      moderado : {color:Tabela(result).adultos.moderado.color, fontWeight:Tabela(result).adultos.moderado.fontWeight}}}) : '';
      
    }else if(result > 16.9 && result < 18.5){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.leve.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.leve.texto, risco:Tabela(result).adultos.leve.risco, color: Tabela(result).adultos.leve.color,
      normal: Tabela(result).adultos.leve.faixa, def: (peso - Tabela(result).adultos.leve.normal), 
      leve : {color:Tabela(result).adultos.leve.color, fontWeight:Tabela(result).adultos.leve.fontWeight}}}) : '';
      
    }else if(result > 18.4 && result < 25.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.saudavel.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.saudavel.texto, risco:Tabela(result).adultos.saudavel.risco, color: Tabela(result).adultos.saudavel.color,
      normal: Tabela(result).adultos.saudavel.faixa, def: (peso - Tabela(result).adultos.saudavel.normal), 
      saudavel : {color:Tabela(result).adultos.saudavel.color, fontWeight:Tabela(result).adultos.saudavel.fontWeight}}}) : '';
     
    }else if(result > 24.9 && result < 30.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.sobrepeso.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.sobrepeso.texto, risco:Tabela(result).adultos.sobrepeso.risco, color: Tabela(result).adultos.sobrepeso.color,
      normal: Tabela(result).adultos.sobrepeso.faixa, def: (peso - Tabela(result).adultos.sobrepeso.normal), 
      sobrepeso : {color:Tabela(result).adultos.sobrepeso.color, fontWeight:Tabela(result).adultos.sobrepeso.fontWeight}}}) : '';
  
    }else if(Tabela(result).adultos.grauUm.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauUm.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauUm.texto, risco:Tabela(result).adultos.grauUm.risco, color: Tabela(result).adultos.grauUm.color,
      normal: Tabela(result).adultos.grauUm.faixa, def: (peso - Tabela(result).adultos.grauUm.normal), 
      grauUm : {color:Tabela(result).adultos.grauUm.color, fontWeight: Tabela(result).adultos.grauUm.fontWeight}, 
      }}) : '';
  
    }else if(result > 34.9 && result < 40.0){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauDois.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauDois.texto, risco:Tabela(result).adultos.grauDois.risco, color: Tabela(result).adultos.grauDois.color,
      normal: Tabela(result).adultos.grauDois.faixa, def: (peso - Tabela(result).adultos.grauDois.normal), 
      grauDois : {color:Tabela(result).adultos.grauDois.color, fontWeight: Tabela(result).adultos.grauDois.fontWeight},
      }}) : '';
  
    }else if(Tabela(result).adultos.grauTres.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela(result).adultos.grauTres.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela(result).adultos.grauTres.texto, risco:Tabela(result).adultos.grauTres.risco, color: Tabela(result).adultos.grauTres.color,
      normal: Tabela(result).adultos.grauTres.faixa, def: (peso - Tabela(result).adultos.grauTres.normal), 
      grauTres : {color: Tabela(result).adultos.grauTres.color, fontWeight:Tabela(result).adultos.grauTres.fontWeight},
      }}) : '';
      }
    }
  
  }