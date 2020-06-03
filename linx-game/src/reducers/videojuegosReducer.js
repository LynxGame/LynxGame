import { mostrarJuegos } from '../actions'
 
const initialState = {
    list: []
}
 
export function showVideojuegos(state = initialState, action) { 
    switch (action.type) {
        case mostrarJuegos:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }  
}