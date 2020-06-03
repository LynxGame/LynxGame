import { muestraPersonal } from '../actions'
 
const initialState = {
    list: []
}  
 
export function showPersonal(state = initialState, action) { 
    switch (action.type) {
        case muestraPersonal:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}