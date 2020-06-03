import axios from 'axios'
 
export const muestraJuegos = 'muestraJuegos'
 
export function showVideojuegos() {
    return (dispatch, getState) => {
        axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllGames')
            .then((response) => {
                dispatch( { type: muestraJuegos, payload: response.data } ) 
            }) 
    }
}

export const muestraClientes = 'muestraClientes'
 
export function showVideojuegos() {
    return (dispatch, getState) => {
        axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllCliente')
            .then((response) => {
                dispatch( { type: muestraClientes, payload: response.data } ) 
            }) 
    }
}


    