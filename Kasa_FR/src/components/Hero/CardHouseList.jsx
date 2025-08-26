import React from "react";
import CardHouse from "./CardHouse";

function CardHouseList({ houses }) {
  return (
    <div className="card-house-list">
      {houses.map((house) => (
        <CardHouse key={house.id} house={house} />
      ))}
    </div>
  );
}

export default CardHouseList;