import { Tabela } from '../db/'

export function Validate(result, idade, genero, altura, peso, dispatch, finished){

  //Tabela(result,altura)
  
    if(idade < 16){

      if(Tabela(result)[genero][idade].grave.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela()[genero][idade].grave.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela()[genero][idade].grave.texto, risco: Tabela()[genero][idade].grave.risco, color: Tabela()[genero][idade].grave.color,
        normal: Tabela()[genero][idade].grave.faixa, def: (peso - Tabela()[genero][idade].grave.normal),  
        grave : {color:Tabela()[genero][idade].grave.color, fontWeight: Tabela()[genero][idade].grave.fontWeight}, 
        }}) : '';
    
      }else if(Tabela(result)[genero][idade].saudavel.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela()[genero][idade].saudavel.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela()[genero][idade].saudavel.texto, risco: Tabela()[genero][idade].saudavel.risco, color: Tabela()[genero][idade].saudavel.color,
        normal: Tabela()[genero][idade].saudavel.faixa, def: (peso - Tabela()[genero][idade].saudavel.normal),  
        saudavel : {color:Tabela()[genero][idade].saudavel.color, fontWeight: Tabela()[genero][idade].saudavel.fontWeight}, 
        }}) : '';
       
      }else if(Tabela(result)[genero][idade].sobrepeso.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela()[genero][idade].sobrepeso.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela()[genero][idade].sobrepeso.texto, risco: Tabela()[genero][idade].sobrepeso.risco, color: Tabela()[genero][idade].sobrepeso.color,
        normal: Tabela()[genero][idade].sobrepeso.faixa, def: (peso - Tabela()[genero][idade].sobrepeso.normal),  
        sobrepeso : {color:Tabela()[genero][idade].sobrepeso.color, fontWeight: Tabela()[genero][idade].sobrepeso.fontWeight}, 
        }}) : '';
    
      }else if(Tabela(result)[genero][idade].grauUm.condicao){
        dispatch({ type: 'UPDATE_VALUE', payload : Tabela()[genero][idade].grauUm.ratio}) 
        finished ? dispatch({ type: 'UPDATE_NIVEL', 
        payload : { name: Tabela()[genero][idade].grauUm.texto, risco: Tabela()[genero][idade].grauUm.risco, color: Tabela()[genero][idade].grauUm.color,
        normal: Tabela()[genero][idade].grauUm.faixa, def: (peso - Tabela()[genero][idade].grauUm.normal),  
        grauUm : {color:Tabela()[genero][idade].grauUm.color, fontWeight: Tabela()[genero][idade].grauUm.fontWeight}, 
        }}) : '';
    
      }
     
    }else{
  
    if(Tabela(result).adultos.grave.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.grave.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.grave.texto, risco:Tabela().adultos.grave.risco, color: Tabela().adultos.grave.color,
      normal: Tabela().adultos.grave.faixa, def: (peso - Tabela().adultos.grave.normal),  
      grave : {color:Tabela().adultos.grave.color, fontWeight:Tabela().adultos.grave.fontWeight}}}) : '';
  
    }else if(Tabela(result).adultos.moderado.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.moderado.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.moderado.texto, risco:Tabela().adultos.moderado.risco, color: Tabela().adultos.moderado.color,
      normal: Tabela().adultos.moderado.faixa, def: (peso - Tabela().adultos.moderado.normal), 
      moderado : {color:Tabela().adultos.moderado.color, fontWeight:Tabela().adultos.moderado.fontWeight}}}) : '';
      
    }else if(Tabela(result).adultos.leve.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.leve.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.leve.texto, risco:Tabela().adultos.leve.risco, color: Tabela().adultos.leve.color,
      normal: Tabela().adultos.leve.faixa, def: (peso - Tabela().adultos.leve.normal), 
      leve : {color:Tabela().adultos.leve.color, fontWeight:Tabela().adultos.leve.fontWeight}}}) : '';
      
    }else if(Tabela(result).adultos.saudavel.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.saudavel.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.saudavel.texto, risco:Tabela().adultos.saudavel.risco, color: Tabela().adultos.saudavel.color,
      normal: Tabela().adultos.saudavel.faixa, def: (peso - Tabela().adultos.saudavel.normal), 
      saudavel : {color:Tabela().adultos.saudavel.color, fontWeight:Tabela().adultos.saudavel.fontWeight}}}) : '';
     
    }else if(Tabela(result).adultos.sobrepeso.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.sobrepeso.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.sobrepeso.texto, risco:Tabela().adultos.sobrepeso.risco, color: Tabela().adultos.sobrepeso.color,
      normal: Tabela().adultos.sobrepeso.faixa, def: (peso - Tabela(null,altura).adultos.sobrepeso.normal), 
      sobrepeso : {color:Tabela().adultos.sobrepeso.color, fontWeight:Tabela().adultos.sobrepeso.fontWeight}}}) : '';
  
    }else if(Tabela(result).adultos.grauUm.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.grauUm.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.grauUm.texto, risco:Tabela().adultos.grauUm.risco, color: Tabela().adultos.grauUm.color,
      normal: Tabela().adultos.grauUm.faixa, def: (peso - Tabela().adultos.grauUm.normal), 
      grauUm : {color:Tabela().adultos.grauUm.color, fontWeight: Tabela().adultos.grauUm.fontWeight}, 
      }}) : '';
  
    }else if(Tabela(result).adultos.grauDois.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.grauDois.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.grauDois.texto, risco:Tabela().adultos.grauDois.risco, color: Tabela().adultos.grauDois.color,
      normal: Tabela().adultos.grauDois.faixa, def: (peso - Tabela().adultos.grauDois.normal), 
      grauDois : {color:Tabela().adultos.grauDois.color, fontWeight: Tabela().adultos.grauDois.fontWeight},
      }}) : '';
  
    }else if(Tabela(result).adultos.grauTres.condicao){
      dispatch({ type: 'UPDATE_VALUE', payload : Tabela().adultos.grauTres.ratio}) 
      finished ? dispatch({ type: 'UPDATE_NIVEL', 
      payload : { name: Tabela().adultos.grauTres.texto, risco:Tabela().adultos.grauTres.risco, color: Tabela().adultos.grauTres.color,
      normal: Tabela().adultos.grauTres.faixa, def: (peso - Tabela().adultos.grauTres.normal), 
      grauTres : {color: Tabela().adultos.grauTres.color, fontWeight:Tabela().adultos.grauTres.fontWeight},
      }}) : '';
      }
    }
  
  }