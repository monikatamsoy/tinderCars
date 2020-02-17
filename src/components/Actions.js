import React from 'react';
//import Rewind from './actions/Rewind';
import Like from './../ actions/Like';
import SuperLike from './../ actions/SuperLike';
import Dislike from './../ actions/Dislike';

const Actions = (props) => {
    
    return (<div className="App" id="actions">
        <Like 
        {...props} />
        <Dislike 
        {...props}
         />
        <SuperLike  {...props}/>


    </div>);
}

export default Actions;