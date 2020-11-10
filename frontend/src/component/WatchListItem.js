import React from 'react';

function WatchListItem({id,balance,paymentStatus}){
    return (
        <span>({id}, {balance}, {paymentStatus})<br/></span>
    );
}

export default WatchListItem;
