import React from 'react';
import { useParams } from 'react-router-dom';
import useHouses from '../../hooks/useHouses';

function DetailsHouse() {
  const { id } = useParams();
  const { houses, isLoading, error } = useHouses();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const house = houses.find((item) => item.id === id);

  if (!house) {
    return <div>Maison non trouvée</div>;
  }

  return (
    <div>
      <img src={house.cover} alt={house.title} />
      <h2>{house.title}</h2>
      <h3>{house.location}</h3>
      <p>{house.tags.map((tag) => `${tag}`).join(' ')}</p>
      <p>{house.host.name}</p>
      <p>{house.host.rating}</p>
      <p>Description: {house.description}</p>
      <p>Équipements: {house.equipments.map((equip) => `${equip}`).join(', ')}</p>
    </div>
  );
}

export default DetailsHouse;