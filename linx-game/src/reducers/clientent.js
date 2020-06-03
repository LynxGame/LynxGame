import { muestraClientesSinCredito } from '../actions'
 
const initialState = {
    list: []
}  
 
export function showClientesNoCredit(state = initialState, action) { 
    switch (action.type) {
        case muestraClientesSinCredito:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}