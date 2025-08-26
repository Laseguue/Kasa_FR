import React from 'react';

function CardHouse({ house }) {
  return (
    <div className="card-house">
      {house.cover && <img src={house.cover} alt={house.name} />}
      <h3>{house.title}</h3>
    </div>
  );
}

export default CardHouse;