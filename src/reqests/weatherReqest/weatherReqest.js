import axios from 'axios'

const BASE_PATH = 'https://api.openweathermap.org/data/2.5/'
const CITY_PATH = 'forecast?q='
const KEY_PATH = '&appid='
const KEY = 'NEED_KEY'
const UNITS = '&units=metric'

export const weatherReqest = async (city, setData) => {
    const CITY = city
    const res = await axios.get(`${BASE_PATH}${CITY_PATH}${CITY}${KEY_PATH}${KEY}${UNITS}`)
    setData(res.data.list)
}
