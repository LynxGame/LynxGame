import { combineReducers } from 'redux';
import { showVideojuegos } from './videojuegos';

const rootReducer = combineReducers({
    videojuego: showVideojuegos
});

export default rootReducer;