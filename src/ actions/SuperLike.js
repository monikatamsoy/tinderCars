import React from 'react';
//import More from '../More';



const SuperLike = ({ activeCar, Choices}) => {
    return (<button type="button" onClick={() => {
        return (Choices('SuperLike'));
    } }>

        <img src="images/misc/like.png" alt="Like car" />

    </button>);
};

export default SuperLike;