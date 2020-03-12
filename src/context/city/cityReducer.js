import { SELECT_CITY } from '../type'

export const cityReducer = (state, action) =>{
    switch (action.type){
        case SELECT_CITY:
            return action.payload

    default: return state
    }
}