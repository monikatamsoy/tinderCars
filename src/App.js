import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import View from './components/View';
import Activity from './components/Activity';
import Like from './ actions/Like';


const App = () => {
  //const cars = data;
  const [cars,setCars] = useState(data)
  const activeCar = 0;
  
   
   const LikeCar = (activeCar)=>{
    
    cars.forEach(car => { 
      if(car.id === activeCar) {
        car.like = car.visited = true;
        
      }
      
    });
    setCars(cars)
   }
   const DislikeCar = (activeCar)=>{
    cars.forEach(car => { 
      if(car.id === activeCar) {
        car.dislike = car.visited = true;
        
      }
    });
    setCars(cars)
   }
   const SuperLikeCar = (activeCar)=>{
    cars.forEach(car => { 
      if(car.id === activeCar) {
        car.like = car.visited = true;
        
      }
      
    })
    setCars(cars);
  
   }
   const Choices = (activeCar, action) => {
    switch(action){
      case 'Like':
        {LikeCar(activeCar.id)};
      case 'Dislike':
        {DislikeCar(activeCar.id)};
      case 'SuperLike':
          {SuperLikeCar(activeCar.id)};
    }
    setCars(cars.shift())
  }
    //console.log(cars)
  return (
    <div className="App">
      <header className="App-header">
        {cars[0]? <View 
        car={cars[activeCar]}
        Choices={Choices}/> : <Activity 
        cars={data}
        />}
      </header>
    </div>
  );
   
}

export default App;
