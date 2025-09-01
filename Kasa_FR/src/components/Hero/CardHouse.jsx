import React from 'react';
import { Link } from 'react-router-dom';

function CardHouse({ house }) {
  return (
    <Link to={`/details/${house.id}`} className="card-house-link">
      <div className="card-house">
        {house.cover && <img src={house.cover} alt={house.name} />}
        <h3>{house.title}</h3>
      </div>
    </Link>
  );
}

export default CardHouse;