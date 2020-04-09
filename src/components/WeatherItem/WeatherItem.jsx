import React from 'react'
import PropTypes from 'prop-types'
import './WeatherItem.scss'

export const WeatherItem = ({data}) =>{
    return(
        <>
            {data.map(inner =>(
                <div className='weather-item' key={inner.dt}>
                    <div className='weather-item__main'>
                        <img className='weather-item__img' src={`http://openweathermap.org/img/wn/${inner.weather[0].icon}@2x.png`} alt={inner.weather[0].description} />
                        <p className='weather-item__header weather-item__inner-padding'>{inner.weather[0].main}</p>
                    </div>
                    <div className='weather-item__additional'>
                        <p className='weather-item__description'>{inner.weather[0].description}</p>
                        <p className='weather-item__temp weather-item__inner-padding'>Temperature: {Math.round(inner.main.temp)}°C</p>
                        <p className='weather-item__data-day weather-item__inner-padding'>Date: {inner.dt_txt.split(' ')[0].split('-')[2]}.{inner.dt_txt.split(' ')[0].split('-')[1]}</p>
                        <p className='weather-item__hour weather-item__inner-padding'>Time: {inner.dt_txt.split(' ')[1].split(':')[0]}:00</p>
                    </div>
                </div>
            ))}
            
        </>
    )
}

WeatherItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

WeatherItem.defaultProps = {
    data: []
}