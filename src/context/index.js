import React, { createContext, useReducer, useState } from 'react';

export const ValidContext = createContext();

const initialValue = {
    value: 0,
    categoria: {
        name: '',
        color: 'rgb(0, 0, 0)',
        grave : {},
        moderado : {},
        leve : {},
        saudavel : {},
        sobrepeso : {},
        grauUm : {},
        grauDois : {},
        grauTres : {},
        def(){return 0}
    },
}

const reducer = (state, action) =>{

    switch(action.type){
        case 'UPDATE_VALUE' : {
            const newState = {...state}
            newState.value = action.payload
            return newState
        }
        case 'UPDATE_NIVEL' : {
            const newState = {...state}
            newState.categoria = action.payload
            return newState
        }

        default: return state
    }

}

export default function ValidProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialValue)

    return(
        <ValidContext.Provider 
        value={{ state, dispatch }}>
            {children}
        </ValidContext.Provider>
    )
}
