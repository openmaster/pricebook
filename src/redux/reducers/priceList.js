/* eslint-disable default-case */
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM} from '../actionTypes';

const initalState = {
    items:[
        {id: 1, name: 'item 1', price: 3.59, dep: 1},
        {id: 2, name: 'item 2', price: 4.99, dep: 2},
        {id: 3, name: 'item 3', price: 1.99, dep: 1},
        {id: 4, name: 'item 4', price: 7.59, dep: 1},
        {id: 5, name: 'item 5', price: 6.99, dep: 2},
        {id: 6, name: 'item 6', price: 5.99, dep: 1},
        {id: 7, name: 'item 7', price: 33.59, dep: 3},
        {id: 338, name: 'item 8', price: 9.99, dep: 2},
        {id: 9, name: 'item 9', price: 1.99, dep: 3}
    ]
}

export default function(state=initalState, action){
    switch(action.type){
        case ADD_ITEM: {
            //console.log('hitting add item')
            const {id, content} = action.payload;
            return{
                items: [...state.items, {id, ...content}]
            };
            
        }
        case EDIT_ITEM: {
            const {content} = action.payload;
            //console.log('hitting edit item reducer')
            return {
                ...state.items,
                ...state.items.map(item => {
                    if(item.id === content.id){
                        item = content;
                    }
                    return item;
                })
            }
        }
        case DELETE_ITEM: {
            //console.log(state)
            const id = action.payload.id;
            //console.log('hitting delete item')
            const r = state.items.filter(item => item.id !== id)
            return {
                items: r
            }
        }
        default: {
            console.log('hitting default reducer')
            return state;
        }
    }
}