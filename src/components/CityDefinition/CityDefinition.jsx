import React, {useContext, useState} from 'react'
import { Portal } from '../Portal/Portal'
import { CityContext } from '../../context/city/cityContext'
import './CityDefinition.scss'
import { SelectList } from '../SelectList/SelectList'

import cityList from '../../reqests/city.list.json'

import { Preloader } from '../Preloader/Preloader'
import { usePosition } from '../../reqests/geolocation/usePosition'
import { cityGeolocation } from '../../reqests/geolocation/cityGeolocation'


export const CityDefinition = ({modal, setModal}) =>{

    const { city, selectCity } = useContext(CityContext)

    const [sel, setSel] = useState()

    const [load, setLoad] = useState(false)
    const { latitude, longitude, error } = usePosition()

    const dataCity = async () =>{
        setLoad(true)
        const result = cityGeolocation(latitude, longitude, error, cityList)
        await setSel(result)
        await setLoad(false)
        console.log(result)
    }
    
    return (
        <>
            {load ? 
                <div className='container-preload'> <Preloader /></div>
                :
                <>
                    { modal &&
                        <Portal>
                            <div className='modalOverlay'>
                                <div className='modalOverlay__window'>
                                    {city ? 
                                    <div>
                                        <p className='modalOverlay__header'>Weather is presented on the city of  
                                        <span className='modalOverlay__activeCity'>{` ${city}`}</span>
                                        </p>
                                        <p className='modalOverlay__header'>  
                                        <span onClick={dataCity} className='modalOverlay__activeCity'>Click</span>
                                        to automatically override your city
                                        </p>
                                    </div>
                                    :
                                    <p className='modalOverlay__header'>To define a city,  
                                    <span onClick={dataCity} className='modalOverlay__activeCity'>press</span>
                                    , or select a city manually
                                    </p>
                                    }
                                    <SelectList sel={sel} setSel={setSel} setModal={setModal} list={cityList} placeholder='Enter the name of the city' actSelect={selectCity} />
                                </div>
                            </div>
                        </Portal>
                    
                    }
                </> 
            }
        </>
    )
}