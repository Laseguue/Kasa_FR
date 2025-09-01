import React from 'react';
import useApropos from '../../hooks/useApropos';
import { useState } from 'react';


function Features() {
  const { apropos, isLoading, error } = useApropos();
  const [openSections, setOpenSections] = useState({});
  if (isLoading) return <div>Chargement des sections...</div>;
  if (error) return <div>Erreur lors du chargement: {error}</div>;
  
  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <>
      {apropos.length > 0 && Object.entries(apropos[0]).map(([key, value]) => (
        <div key={key} className={`features ${key.toLowerCase()}`}>
          <div className="features-content" onClick={() => toggleSection(key)}>
            <h3>{key}</h3>
            {openSections[key] ? (
              <img src="fleche-vers-bas.svg" alt="arrow-top" className="arrow-top"/>
            ) : (
              <img src="fleche-vers-haut.svg" alt="arrow-bot" className="arrow-bot"/>
            )}
          </div>
          {openSections[key] && <p className="features-text">{value}</p>}
        </div>
      ))}
    </>
  );
}

export default Features;