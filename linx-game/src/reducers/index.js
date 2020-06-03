import { combineReducers } from 'redux';
import { showVideojuegos } from './videojuegos';
import { showClientes } from './clientes';

const rootReducer = combineReducers({
    videojuego: showVideojuegos,
    cliente: showClientes
});

export default rootReducer;