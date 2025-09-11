import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useHouses from '../../hooks/useHouses';
import './DetailsHouse.css';
import Features from '../Apropos/Features';

function DetailsHouse() {
  const { id } = useParams();
  const { houses, isLoading, error } = useHouses();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === house.pictures.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? house.pictures.length - 1 : prev - 1
    );
  };

  

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= parseInt(rating) ? 'star filled' : 'star empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='details-house'>
      <div className='carousel-container'>
        <img 
          src={house.pictures[currentImageIndex]} 
          alt={house.title} 
          className='carousel-image'
        />
        {house.pictures.length > 1 && (
          <>
            <button className='carousel-btn prev' onClick={prevImage}>
              <img src="/fleche-vers-bas.svg" alt="Previous" className="carousel-arrow left" />
            </button>
            <button className='carousel-btn next' onClick={nextImage}>
              <img src="/fleche-vers-bas.svg" alt="Next" className="carousel-arrow right" />
            </button>
            <div className='carousel-counter'>
              {currentImageIndex + 1}/{house.pictures.length}
            </div>
          </>
        )}
      </div>

      <div className='house-info-container'>
        <div className='house-main-info'>
          <h2 className='house-title'>{house.title}</h2>
          <p className='house-location'>{house.location}</p>
          <div className='house-tags'>
            {house.tags.map((tag, index) => (
              <span key={index} className='tag'>{tag}</span>
            ))}
          </div>
        </div>

        <div className='house-host-info'>
          <div className='host-details'>
            <span className='host-name'>{house.host.name}</span>
            <img src={house.host.picture} alt={house.host.name} className='host-picture' />
          </div>
          <div className='host-rating'>
            {renderStars(house.rating)}
          </div>
        </div>
      </div>

      <div className='house-accordions'>
        <div className='accordion-item'>
          <Features items={[{ title: 'Description', content: <p>{house.description}</p> }]} />
        </div>
        <div className='accordion-item'>
          <Features
            items={[
              {
                title: 'Équipements',
                content: (
                  <ul>
                    {house.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                )
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsHouse;