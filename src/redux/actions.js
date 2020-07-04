import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DEP, SET_PRICERANGE, SEARCH, BATCHPRICECHANGE} from './actionTypes';

let ItemId = 4;

export const add_item = content => ({
    type: ADD_ITEM,
    payload: {
        id: ++ItemId,
        content
    }
});
export const edit_item = content => ({
    type: EDIT_ITEM,
    payload: {
        content
    }
})
export const delete_item = id => ({
    type: DELETE_ITEM,
    payload: {
        id
    }
})
export const set_dep = dep => ({
    type: SET_DEP,
    payload: {
        dep
    }
})
export const set_priceRange = rangeId => ({
    type: SET_PRICERANGE,
    payload: {
        rangeId
    }
})
export const search = content => ({
    type: SEARCH,
    payload: {
        content
    }
})
export const batchPriceChange = content => ({
    type: BATCHPRICECHANGE,
    payload: {
        content
    }
})