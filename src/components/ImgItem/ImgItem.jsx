import React from 'react'
import './ImgItem.scss'

export const ImgItem = ({ dataImg, city }) =>{
    return(
        <aside className='info-block__img-section'>
            {dataImg.map(inner=>(
                <div className='info-block__img-section' key={Math.floor(Math.random()*1000)}>
                    <img className='info-block__img' src={inner} alt={city} />
                </div>
            ))}
        </aside>
    )
}