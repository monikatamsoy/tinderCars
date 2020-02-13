import React from 'react';


const Dislike = ({ carId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(carId, 'ADD_TO_DISLIKED_CARS')}>
    <img src="images/misc/dislike.png" alt="Dislike car" />
  </button>
);

export default Dislike;