import React from 'react';
import Actions from './Actions';


const Car = ({car, modifyChoices}) => {
    const { model, maker, full_name, image } = car;

    return (
         <div className="container"> 
            <img src={image} className= "rounded mx-auto d-block" alt = {model} />
            <div className="description">
            <h3> {maker} </h3>      
            <p>{full_name}</p>
          </div>
        <Actions 
        car={car}
        modifyChoices={modifyChoices}
        />
      </div>
    );
};

export default Car;