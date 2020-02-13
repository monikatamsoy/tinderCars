import React from 'react';

const LikedCars = ({ car }) => (
  <div className="liked-car">
    <div className="liked-car-image">
      <img
        src={car.image}
        alt={`You liked ${car.model}`}
      />
    </div>
  </div>
);

export default LikedCars;