import {RATINGS} from '../shared/ratings';
import * as ActionTypes from './ActionTypes';

export const Ratings = (state = RATINGS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_RATING:
            var rating = action.payload;
            rating.id = state.length;
            return state.concat(rating);
        default:
            return state;
    }
}