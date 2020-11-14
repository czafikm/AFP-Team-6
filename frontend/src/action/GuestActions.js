import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as guestConstants from '../dispatcher/GuestActionConstants'

export const recordGuest = ({email,firstName,guestAge,lastName}) =>{
        axios.post('/guest/record',
            {
                email: email,
                firstName: firstName,
                guestAge: guestAge,
                lastName: lastName
            })
            .then(() => {
                fetchGuest();
                dispatcher.dispatch({action: guestConstants.clearError});
            })
            .catch((err) => {
                dispatcher.dispatch({
                    action: guestConstants.showError,
                    payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
                });
                fetchGuest();
            });
}

export const fetchGuest = () =>{

    axios.get('/guest/list').then((resp)=>{
        dispatcher.dispatch({
            action : guestConstants.refresh,
            payload: resp.data
        });
    })
}

export const deleteGuest = ({id}) =>{
    axios.delete('/guest/delete/'+id)
        .then(() => {
            fetchGuest();
            dispatcher.dispatch({action : guestConstants.clearError});

        })
        .catch((err) => {
            dispatcher.dispatch({
                action : guestConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchGuest();
        });
}
