import React from 'react';
import rating from './assets/others/rating.png';

export default function Cards({ id }) {
  return (
    <div className="cards">
      <img src={id} alt="frame1" />
      <div className="cardtext">
        <span>Desert king</span>
        <span id="span">1MBT per night</span>
      </div>
      <div className="cardtext">
        <span>2345km away</span>
        <span>available for 2weeks stay</span>
      </div>
      <div id="rating">
        <img src={rating} alt="rating" />
      </div>
    </div>
  );
}
