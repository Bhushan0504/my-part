import * as ActionTypes from './ActionTypes';

export const addComment = (content, cid, wid) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        cid: cid,
        wid: wid,
        content: content
    }
  });

  export const addRating = (content, cid, wid) => ({
    type: ActionTypes.ADD_RATING,
    payload: {
        cid: cid,
        wid: wid,
        content: content
    }
  });