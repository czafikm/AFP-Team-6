import React from 'react';

function GuestListItem({email, firstName, guestAge, id, lastName}){
    return (
        <span>({id}, {firstName}, {lastName},  {guestAge}, {email})<br/></span>
    );
}

export default GuestListItem;
