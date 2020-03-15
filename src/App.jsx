import React, { useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { CityDefinition } from './components/CityDefinition/CityDefinition'
import './App.scss'



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

  return (
    <>
      <CityDefinition modal={modal} setModal={setModal} />
      <Navigation setModal={setModal} />
      <div className={`content-container content-container_${timesOfDay}`}>
        {children}
      </div>
    </>
  )
}

export default App;
