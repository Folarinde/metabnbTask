import React from 'react';
import Cards from './Cards';
import { frames } from './Frames';

export default function CardDisplay() {
  return (
    <div className="eightCards">
      <h2>Inspiration for your next adventure</h2>
      <div className="cardDisplay">
        <Cards id={frames[4]} />
        <Cards id={frames[5]} />
        <Cards id={frames[6]} />
        <Cards id={frames[7]} />
        <Cards id={frames[0]} />
        <Cards id={frames[1]} />
        <Cards id={frames[2]} />
        <Cards id={frames[3]} />
      </div>
    </div>
  );
}
