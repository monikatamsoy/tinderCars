import React from 'react';

function Activity(cars) {
    const liked = cars.filter(car => (car.liked == true));
    const disliked = cars.filter(car => (car.liked == true));
    const superliked = cars.filter(car => (car.liked == true));
    return (
        <div>
            <p>{liked.forEach(car => car)}</p>
        </div>
    )
}

export default Activity;