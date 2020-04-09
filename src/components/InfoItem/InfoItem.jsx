import React from 'react'
import './InfoItem.scss'
import PropTypes from 'prop-types'

export const InfoItem = ({ dataInfo, city }) =>{
    return(
        <article className='info-block__info-section' >
            <h1 className='info-block__city'> {city} </h1>
            <p className='info-block__text'> {dataInfo} </p>
        </article>
    )
}

InfoItem.propTypes = {
    dataInfo: PropTypes.string,
    city: PropTypes.string
}

InfoItem.defaultProps = {
    dataInfo: null,
    city: null
}