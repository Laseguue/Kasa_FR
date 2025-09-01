import React from 'react';
import ImageTextOverlay from './ImageTextOverlay';
import CardHouseList from './CardHouseList';
import useHouses from '../../hooks/useHouses';
import './Hero.css';

function Hero() {
  const { houses, isLoading, error } = useHouses();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="hero">
      <ImageTextOverlay />
      <CardHouseList houses={houses} />
    </div>
  );
}
export default Hero;