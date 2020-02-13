import React, {useState} from 'react';
import Header from './components/Header';
import Car from './components/Car';
import Activity from './components/Activity';
import data from './data.json';
import { render } from '@testing-library/react';


const App = () => {
  const[cars,setCars] = useState(data);
  const[liked,setLiked] = useState([]);
  const[disliked,setDisliked] = useState([]);
  const[superLiked,setSuperLiked] = useState([]);
  const activeCar = 0;

  const removedCarFromDataSrc = (carSource, carId) => 
    carSource.filter(cars => cars.id !== carId);

  const modifyChoices = (carId, action) => {
    const newCars = [...cars];
    const newLiked = [...liked];
    const newSuperLiked = [...superLiked];
    const newDisliked = [...disliked];

    switch(action){
      case 'ADD_TO_LIKED_CARS':
        if(!cars[activeCar].liked.includes(carId)){
          newCars[activeCar].liked.push(carId);
          newLiked.push(data[carId]);

          setLiked(newLiked);
          setCars(removedCarFromDataSrc(cars,carId))
        }
        break;
      case 'ADD_TO_DISLIKED_CARS':
          if (!cars[activeCar].disliked.includes(carId)) {
            newCars[activeCar].disliked.push(carId);
            newDisliked.push(data[carId]);
  
            setDisliked(newDisliked);
            setCars(removedCarFromDataSrc(cars, carId));
          }
          break;
        case 'ADD_TO_SUPERLIKED_CARS':
          if (!cars[activeCar].superLiked.includes(carId)) {
            newCars[activeCar].superLiked.push(carId);
            newSuperLiked.push(data[carId]);
  
            setSuperLiked(newSuperLiked);
            setCars(removedCarFromDataSrc(cars, carId));
          }
          break;
          default:
            return cars;
    }

  };
  
  return (
    <div className="app">
    <div className="container">
      <div className="card">
        <div className="card-header">
        
          <Header />
        </div>
        <div className="car-body">
        {cars[1] ? (
          <Car
          key={cars[1].id}
          car={cars[1]}
          modifyChoices={modifyChoices}
          liked={liked}
        /> ) : (
        <Activity
          //activeCarImage={cars[activeCar].image}
          liked={liked}
          superLiked={superLiked}
        /> )}

        </div> 
        </div>
      </div>
    </div>
    
  );
}

export default App;
