import React from 'react';
//import More from '../More';



const SuperLike = ({ activeCar, Choices}) => {
    return (<button type="button" onClick={() => {
        return (Choices('SuperLike'));
    } }>

        <img src="/misc/superLike.png" alt="SuperLike car" />

    </button>);
};

export default SuperLike;