import React, { useEffect, useState, useContext } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { CityDefinition } from './components/CityDefinition/CityDefinition'

import { CityContext } from './context/city/cityContext'
import { Preloader } from './components/Preloader/Preloader'
import { usePosition } from './reqests/geolocation/usePosition'
import { cityGeolocation } from './reqests/geolocation/cityGeolocation'
import cityList from './reqests/city.list.json'

function App({ children }) {

  const hourDefinition = () =>{
    let color
    const hour = new Date().getHours()
    if (0<=hour && hour<6){color='night'}
    else if (6<=hour && hour<12){color='morning'}
    else if (12<=hour && hour<18){color='day'}
    else {color='evening'}
    return color
  }


  const timesOfDay = hourDefinition()

  const [modal, setModal] = useState(false)
  const { city, selectCity } = useContext(CityContext)
  const [load, setLoad] = useState(true)
  const { latitude, longitude, error } = usePosition()

  useEffect(()=>{
    async function dataCity(){
      const result = cityGeolocation(latitude, longitude, error, cityList)
      await selectCity(result)
      setLoad(false)
    }

    dataCity()
    // const result = cityGeolocation(latitude, longitude, error, cityList)
    // selectCity(result)
    // setLoad(false)
  }, [city, latitude, longitude, error, selectCity])

  const x = Math.floor(latitude)
  return (
    <>
      {load ? <div className='container-preload'> <Preloader /></div>:
      <><CityDefinition modal={modal} setModal={setModal} />
      <Navigation setModal={setModal} />
      <div className={`content-container content-container_${timesOfDay}`}>
        {children}
      </div></>
      }
      {x}
    </>
  )
}

export default App;
