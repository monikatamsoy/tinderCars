import React from 'react';
import Car from './Car';
//import App from '../App';

const More = ({  car, modifyChoices, liked }) => {
  
      
      return (
        <button type="button" onClick={()=>{
          return (<div><Car car={car}
             modifyChoices={modifyChoices}/></div>)
        }}>
          Back
        </button>
      )
 };

export default More;