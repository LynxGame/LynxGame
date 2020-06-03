import { combineReducers } from 'redux';
import { showVideojuegos } from './videojuegos';
import { showClientes } from './clientes';
import { showPersonal } from '../actions';

const rootReducer = combineReducers({
    videojuego: showVideojuegos,
    cliente: showClientes,
    personal: showPersonal
});

export default rootReducer;