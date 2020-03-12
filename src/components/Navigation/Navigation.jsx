import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CityContext } from '../../context/city/cityContext'

export const Navigation = ({setModal}) => {
    const { city } = useContext(CityContext)
    return(
        <nav className='navigation'>
            <div className='navigation__section'>
                <NavLink exact to='/'>Weather</NavLink>
                <NavLink to='/city-info'>City Information</NavLink>
            </div>
            <div>
                <p className='navigation__city' onClick={() => setModal(true)}>{`Select city: ${city}`}</p>
            </div>
        </nav>
    )
}