import React, {useContext} from 'react'
import { Portal } from '../Portal/Portal'
import { CityContext } from '../../context/city/cityContext'
import './CityDefinition.scss'
import { SelectList } from '../SelectList/SelectList'

import cityList from '../../reqests/city.list.json'


export const CityDefinition = ({modal, setModal}) =>{

    const { city, selectCity } = useContext(CityContext)
    
    return (
        <>
            { modal &&
                <Portal>
                    <div className='modalOverlay'>
                        <div className='modalOverlay__window'>
                            <p className='modalOverlay__header'>Weather is presented on the city of  
                            <span className='modalOverlay__activeCity'>{city}</span>
                            </p>
                            <SelectList setModal={setModal} list={cityList} placeholder='Enter the name of the city' actSelect={selectCity} />
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}