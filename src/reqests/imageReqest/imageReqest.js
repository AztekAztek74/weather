import axios from 'axios'

const BASE_PATH = 'https://www.googleapis.com/customsearch/v1?'
const KEY = 'AIzaSyBlO8ZzURu5YqIP-DxfH10oqE_W_TtoX-8&cx=001909621778680338983%3Aqoni1zwjite'
const CX = '001909621778680338983%3Aqoni1zwjite'
const NUM_IMG = '3'
const OTHER_SETTINGS = 'searchType=image&fileType=jpg&imgSize=xlarge&alt=json'

export const imageReqest = async (city, setData) => {
    const CITY = city
    const res = await axios.get(`${BASE_PATH}key=${KEY}&cx=${CX}&num=${NUM_IMG}&${OTHER_SETTINGS}&q=${CITY}`)
    const data = []
    res.data.items.map(item =>{
        data.push(item.link)
        return data
    })
    setData(data)
}
