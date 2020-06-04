import { muestraVenta } from '../actions'
 
const initialState = {
    list: []
}  
 
export function showVenta(state = initialState, action) { 
    switch (action.type) {
        case muestraVenta:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}