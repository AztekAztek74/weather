import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CityContext } from '../../context/city/cityContext'
import './Navigation.scss'
import PropTypes from 'prop-types'

export const Navigation = ({setModal}) => {
    const { city } = useContext(CityContext)
    return(
        <nav className='navigation'>
            <div className='navigation__select-city' onClick={() => setModal(true)}>
                {city ? <><p className='navigation__city-text'>Select city: </p> <p className='navigation__city-text'>{city}</p> </> : <p className='navigation__city-text'>Click to select a city</p>}
            </div>
            <div className='navigation__section'>
                <NavLink exact to='/weather'>Weather</NavLink>
                <NavLink to='/city-info'>City Information</NavLink>
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    setModal: PropTypes.func
}

Navigation.defaultProps = {
    setModal: () => {}
}