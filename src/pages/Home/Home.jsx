import React, { useEffect, useState, useContext } from 'react'
import { weatherReqest } from '../../reqests/weatherReqest/weatherReqest'
import { WeatherItem } from '../../components/WeatherItem/WeatherItem'
import { CityContext } from '../../context/city/cityContext'
import { Preloader } from '../../components/Preloader/Preloader'
import './Home.scss'



export const Home = () =>{

    const { city } = useContext(CityContext)
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)

    
    useEffect(()=>{
        if (city){
            weatherReqest(city, setData)
        }
        
        setLoad(false)
    }, [city])

    return(
        <>
            {load ? <div className='container-preload'> <Preloader /></div>
            :
                city ? 
                <div className='weather-list'>
                    {data && <WeatherItem data={data} />}
                </div>
                :
                <div className='weather-list'>
                    <div className='notSelected__block'>
                        <div className='notSelected__container'>
                            <h1 className='notSelected__text'>No city selected</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}   