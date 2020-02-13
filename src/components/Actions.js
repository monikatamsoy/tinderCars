import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = ({car, modifyChoices}) => (
    <div id= "actions">
        
        <Rewind carId = {car.id}/>
        <Dislike 
            carId={car.id}
            modifyChoices={modifyChoices} 
        />
         <Like
      carId={car.id}
      modifyChoices={modifyChoices}
    />
    <Superlike
      carId={car.id}
      modifyChoices={modifyChoices}
    />


    </div>
)

export default Actions;