import React from 'react'
import './ImgItem.scss'
import PropTypes from 'prop-types'

export const ImgItem = ({ dataImg, city }) =>{
    return(
        <aside className='info-block__img-section'>
            {dataImg.map(inner=>(
                <div className='info-block__img-item' key={Math.floor(Math.random()*1000)}>
                    <img className='info-block__img' src={inner} alt={city} />
                </div>
            ))}
        </aside>
    )
}

ImgItem.propTypes = {
    dataImg: PropTypes.arrayOf(PropTypes.string),
    city: PropTypes.string
}

ImgItem.defaultProps = {
    dataImg: [],
    city: null
}