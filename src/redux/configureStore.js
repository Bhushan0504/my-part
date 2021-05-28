import { createStore, applyMiddleware, combineReducers } from 'redux';
import {  Clients } from './clients';
import {  Workers } from './workers';
import {  Comments } from './comments';
import {  Ratings } from './ratings';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            clients: Clients,
            workers: Workers,
            comments: Comments,
            ratings: Ratings
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
} 