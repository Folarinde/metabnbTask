import React from 'react';
import Cards from './Cards';

export default function CardList({ frames }) {
  const cardComponent = frames.map((card, i) => {
    return (
      <div>
        <Cards id={frames[i]} />
      </div>
    );
  });
  return <div className="cardList">{cardComponent}</div>;
}
