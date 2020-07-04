import {SET_DEP, SET_PRICERANGE, SEARCH} from '../actionTypes';

const initialState = {
        selectedDep: null,
        priceRange: null,
        searchContent: '',
}

export default function(state=initialState, action){
    switch(action.type){
        case SET_DEP: {
            //console.log('hitting set dep');
            return Object.assign({}, state, {selectedDep: action.payload.dep})
        }
        case SET_PRICERANGE: {
            //console.log('hitting set priceRange');
            //console.log(action)
            return Object.assign({}, state, {priceRange: action.payload.rangeId})
        }
        case SEARCH:{
            return Object.assign({}, state, {searchContent: action.payload.content})
        }
        default: {
            return state
        }
    }
}