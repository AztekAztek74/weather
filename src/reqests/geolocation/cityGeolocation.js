export const cityGeolocation = (latitude, longitude, error, cityList) => {
    let city = undefined
    cityList.map(inner =>{
        if((Math.floor(latitude * 100)/100) === (Math.floor(inner.coord.lat * 100) /100) && (Math.floor(longitude * 100) / 100) === (Math.floor(inner.coord.lon * 100) / 100)){
            city = inner.name
            return city
        }
        return city
    })
    if(city){
        return city
    }
    else {
        console.log(error)
    }
}