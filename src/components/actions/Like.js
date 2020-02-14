import React from 'react';
//import More from '../More';



const Like = ({ carId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => {
      
      return( 
        
        modifyChoices(carId, 'ADD_TO_LIKED_CARS') 
      )
    } 
  }>
    
    <img src="images/misc/like.png" alt="Like car" />
    
  </button>
);

export default Like;