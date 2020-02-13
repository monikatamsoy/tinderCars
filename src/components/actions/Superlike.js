import React from 'react';

const Superlike = ({ carId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(carId, 'ADD_TO_SUPERLIKED_CARS')}
  >
    <img src="images/misc/superlike.png" alt="Superlike Car" />
  </button>
);

export default Superlike;