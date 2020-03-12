export const cityGeolocation = (latitude, longitude, error, cityList) => {
    let city = 'Krasnoyarsk'
    cityList.map(inner =>{
        if(Math.floor(latitude) === Math.floor(inner.coord.lat) && Math.floor(longitude) === Math.floor(inner.coord.lon)){
            city = inner.name
            return city
        }
        else{
            console.log(error)
        }
        return city
    })
}