import React from 'react';

function Activity(props) {
    // const cars = [...props]
    
    
    // const liked = cars.filter(car => (car.liked == true));
    // const disliked = cars.filter(car => (car.disliked == true));
    // const superliked = cars.filter(car => (car.superLiked == true));
    return (
        <div className="App">

            <p>
                
                    
                
                {Object.values(props.cars).forEach(value => 
                    value)
                }</p>
        </div>
    )
}

export default Activity;