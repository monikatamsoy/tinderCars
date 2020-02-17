import React from 'react';
import Actions from './Actions';

function View(props) {
  const {
    car, Choices
  } = props;
    const { id, model, maker, image } = props.car;
  //console.log(car.id)
    return(
        <div className="container" >
            <img src={car.image} className= "rounded mx-auto d-block" alt = {car.model} />
            <div className="description">
            <h3> {car.model} </h3>      
            
          </div>
        <Actions 
          { ...props }
        />
        </div>
    )
}
export default View;
