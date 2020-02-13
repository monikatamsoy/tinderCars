import React from 'react';
import LikedCars from './LikedCars';

const Activity = ({ liked, superLiked }) => (
  



    <div id="liked-cars">
      <p>
        {liked.length > 0
          ? "Cars you liked!"
          : ''}
      </p>

      {liked.map(item => (
        <LikedCars key={item.id} car={item} />
      ))}

      <p>{superLiked.length > 0 ? 'Cars you super liked!' : ''}</p>

      {superLiked.map(item => (
        <LikedCars key={item.id} car={item} />
      ))}
    </div>

);

export default Activity;