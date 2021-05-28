import * as ActionTypes from './ActionTypes';
import {WORKERS} from '../shared/workers';


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

export const fetchWorkers = () => (dispatch) => {
    dispatch(workersLoading(true));

    setTimeout(() => {
        dispatch(addWorkers(WORKERS));
    }, 2000);
}

export const workersLoading = () => ({
    type: ActionTypes.WORKERS_LOADING
});

export const workersFailed = (errmess) => ({
    type: ActionTypes.WORKERS_FAILED,
    payload: errmess
});

export const addWorkers = (workers) => ({
    type: ActionTypes.ADD_WORKERS,
    payload: workers
})