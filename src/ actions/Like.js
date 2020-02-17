import React from 'react';
//import More from '../More';



const Like = (props) => (<button type="button" onClick={() => {
    console.log("props", props);
    return (props.Choices(props.car, 'Like'));
} }>

    <img src="images/misc/like.png" alt="Like car" />

</button>);

export default Like;