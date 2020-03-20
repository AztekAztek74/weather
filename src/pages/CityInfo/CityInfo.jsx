import React, { useEffect, useState, useContext } from 'react'
import { wikiReqest } from '../../reqests/wikiReqest/wikiReqest'
import { imageReqest } from '../../reqests/imageReqest/imageReqest'
import { CityContext } from '../../context/city/cityContext'
import { NoCity } from '../../components/NoCity/Nocity'
import { Preloader } from '../../components/Preloader/Preloader'
import { InfoItem } from '../../components/InfoItem/InfoItem'
import { ImgItem } from '../../components/ImgItem/ImgItem'
import './CityInfo.scss'

export const CityInfo = () =>{

    const { city } = useContext(CityContext)
    const [dataInfo, setDataInfo] = useState(null)
    const [dataImg, setDataImg] = useState(null)
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        if (city){
            Promise.all([
                wikiReqest(city, setDataInfo),
                imageReqest(city, setDataImg)
            ])
            .then(setLoad(false))
            
        }
        setLoad(false)
    }, [city])

    return(
        <>
            {load ? <div className='container-preload'> <Preloader /></div>
            :
                city ? 
                    <section className='container-center info-block'>
                        {dataImg && <ImgItem city={city} dataImg={dataImg} />}
                        {dataInfo && <InfoItem city={city} dataInfo={dataInfo} />}
                    </section>
                :
                    <section className='container-center'>
                        <NoCity />
                    </section>
                
            }
        </>
    )
}