import { muestraClientes } from '../actions'
 
const initialState = {
    list: []
}  
 
export function showClientes(state = initialState, action) { 
    switch (action.type) {
        case muestraClientes:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}