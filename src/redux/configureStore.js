import { createStore,combineReducers } from 'redux';
import {  Clients } from './clients';
import {  Workers } from './workers';
import {  Comments } from './comments';
import {  Ratings } from './ratings';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            clients: Clients,
            workers: Workers,
            comments: Comments,
            ratings: Ratings
        })
    );

    return store;
} 