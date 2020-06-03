import { combineReducers } from 'redux';
import { showVideojuegos } from './videojuegos';
import { showClientes } from './clientes';
import { showPersonal } from '../actions';
import { showClientesNoCredit } from './clientent';

const rootReducer = combineReducers({
    videojuego: showVideojuegos,
    cliente: showClientes,
    personal: showPersonal,
    clienteNoCard: showClientesNoCredit
});

export default rootReducer;