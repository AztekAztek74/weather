import React, {useReducer, useEffect} from 'react'
import { cityReducer } from './cityReducer'
import { CityContext } from './cityContext'
import { SELECT_CITY } from '../type'

export const CityState = ({children}) =>{
    const [state, dispatch] = useReducer(cityReducer, localStorage.getItem('city') || 'Krasnoyarsk')

    const selectCity = (city) =>{
        dispatch({
            type: SELECT_CITY,
            payload: city
        })
    }


    useEffect(()=>{
        localStorage.setItem('city', JSON.stringify(state))
    }, [state])

    return(
        <CityContext.Provider value={{
            city: state, 
            selectCity
        }} >
            {children}
        </CityContext.Provider>
    )
}