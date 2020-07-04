import {BATCHPRICECHANGE} from '../actionTypes';

const initialState = {
    priceChange: ''
}

export default function(state=initialState, action){
    switch(action.type){
        case BATCHPRICECHANGE:
            return Object.assign({}, state, {priceChange: action.payload.content})
        default: {
            return state;
        }
            
    }
}