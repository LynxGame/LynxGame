import { muestraJuegos } from '../actions'
 
const initialState = {
    list: []
}  
 
export function showVideojuegos(state = initialState, action) { 
    switch (action.type) {
        case muestraJuegos:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}