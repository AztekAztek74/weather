import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CityContext } from '../../context/city/cityContext'
import './Navigation.scss'

export const Navigation = ({setModal}) => {
    const { city } = useContext(CityContext)
    return(
        <nav className='navigation'>
            <div>
                <p className='navigation__city' onClick={() => setModal(true)}>
                    {city ? `Select city: ${city}` : 'Click to select a city'}
                </p>
            </div>
            <div className='navigation__section'>
                <NavLink exact to='/'>Weather</NavLink>
                <NavLink to='/city-info'>City Information</NavLink>
            </div>
        </nav>
    )
}