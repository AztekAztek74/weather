import axios from 'axios'

const BASE_PATH = 'https://en.wikipedia.org/w/api.php?Access-Control-Allow-Origin&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles='

export const wikiReqest = async (city, setData) => {
    const CITY = city
    const res = await axios.get(`${BASE_PATH}${CITY}`)
    let info = Object.values(res.data.query.pages)[0].extract
    setData(info)
}
