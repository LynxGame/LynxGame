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
 
export function showClientes() {
    return (dispatch, getState) => {
        axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllCliente')
            .then((response) => {
                dispatch( { type: muestraClientes, payload: response.data } ) 
            }) 
    }
}

export const muestraClientesSinCredito = 'muestraClientesSinCredito'
 
export function showClientesNoCredit() {
    return (dispatch, getState) => {
        axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllClienteNoCredit')
            .then((response) => {
                dispatch( { type: muestraClientesSinCredito, payload: response.data } ) 
            }) 
    }
}

export const muestraPersonal = 'muestraPersonal'
 
export function showPersonal() {
    return (dispatch, getState) => {
        axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllPersonal')
            .then((response) => {
                dispatch( { type: muestraPersonal, payload: response.data } ) 
            }) 
    }
}


    