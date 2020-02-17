import React from 'react';
//import More from '../More';



const Dislike = ({ activeCar, Choices }) => (<button type="button" onClick={() => {
    return ((Choices('Dislike')));
} }>

    <img src="images/misc/dislike.png" alt="Dislike car" />

</button>);

export default Dislike;