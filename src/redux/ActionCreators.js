import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  });

  export const postComment = (content, cid, wid) => (dispatch) => {
      const newComment = {
        cid: cid,
        wid: wid,
        content: content
      }

      return fetch(baseUrl + 'comments', {
          method: 'POST',
          body: JSON.stringify(newComment),
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
      })

        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => console.log('Post comments ', error.message));

  }

  export const addRating = (rating) => ({
    type: ActionTypes.ADD_RATING,
    payload: rating

  });

  export const postRating = (content, cid, wid) => (dispatch) => {
    const newRating = {
      cid: cid,
      wid: wid,
      content: content
    }

    return fetch(baseUrl + 'ratings', {
        method: 'POST',
        body: JSON.stringify(newRating),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })

      .then(response => {
          if(response.ok){
              return response;
          }
          else{
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
          }
      },
      error => {
          var errmess = new Error(error.message);
          throw errmess;
      })
      .then(response => response.json())
      .then(response => dispatch(addRating(response)))
      .catch(error => console.log('Post rating ', error.message));

}

export const fetchWorkers = () => (dispatch) => {
    dispatch(workersLoading(true));

    return fetch(baseUrl + 'workers')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(workers => dispatch(addWorkers(workers)))
        .catch(error => dispatch(workersFailed(error.message)));
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

export const fetchClients = () => (dispatch) => {
    dispatch(clientsLoading(true));

    return fetch(baseUrl + 'clients')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));

}

export const clientsLoading = () => ({
    type: ActionTypes.CLIENTS_LOADING
});

export const clientsFailed = (errmess) => ({
    type: ActionTypes.CLIENTS_FAILED,
    payload: errmess
});

export const addClients = (clients) => ({
    type: ActionTypes.ADD_CLIENTS,
    payload: clients
})

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));

}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchRatings = () => (dispatch) => {
    return fetch(baseUrl + 'ratings')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(ratings => dispatch(addRatings(ratings)))
        .catch(error => dispatch(ratingsFailed(error.message)));

}

export const ratingsFailed = (errmess) => ({
    type: ActionTypes.RATINGS_FAILED,
    payload: errmess
});

export const addRatings = (ratings) => ({
    type: ActionTypes.ADD_RATINGS,
    payload: ratings
})