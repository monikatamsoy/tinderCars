import React from 'react';
import Actions from './Actions';

function View(props) {
  const {
    car, Choices
  } = props;
    const { id, name, image } = car;
    return(
        <div className="container" >
            <img src={image} className= "rounded mx-auto d-block" alt = {name} />
            <div className="description">
            <h3> {name} </h3>      
            
          </div>
        <Actions 
          { ...props }
        />
        </div>
    )
}
export default View;
