import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/WatchActionConstants'

export const recordWatch = ({balance,paymentStatus}) =>{
    axios.post('/watch/record',
        {
            balance : balance,
            paymentStatus : paymentStatus
        })
        .then(() => {
            fetchWatches();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchWatches();
        });
}

export const fetchWatches = () =>{

    axios.get('/watch/list').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    })
}
