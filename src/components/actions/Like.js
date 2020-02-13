import React from 'react';


const Like = ({ carId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(carId, 'ADD_TO_LIKED_CARS')}
  >
    <img src="images/misc/like.png" alt="Like car" />
    
  </button>
);

export default Like;