import { createStore,combineReducers } from 'redux';
import {  Clients } from './clients';
import {  Workers } from './workers';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            clients: Clients,
            workers: Workers
        })
    );

    return store;
} 