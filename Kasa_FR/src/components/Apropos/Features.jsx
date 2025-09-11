import React from 'react';
import useApropos from '../../hooks/useApropos';
import { useState } from 'react';
import './Apropos.css';


function Features({ items }) {
  const shouldUseProvidedItems = Array.isArray(items) || (!!items && typeof items === 'object');
  const { apropos, isLoading, error } = shouldUseProvidedItems ? { apropos: [], isLoading: false, error: null } : useApropos();
  const [openSections, setOpenSections] = useState({});

  if (!shouldUseProvidedItems) {
    if (isLoading) return <div>Chargement des sections...</div>;
    if (error) return <div>Erreur lors du chargement: {error}</div>;
  }

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const entries = shouldUseProvidedItems
    ? (Array.isArray(items) ? items : Object.entries(items))
    : (apropos.length > 0 ? Object.entries(apropos[0]) : []);

  return (
    <>
      {entries.map((entry, idx) => {
        const [key, value] = Array.isArray(entry) ? entry : [entry.title, entry.content];
        const isOpen = !!openSections[key];
        return (
          <div key={key || idx} className={`features ${String(key).toLowerCase()}`}>
            <div className="features-content" onClick={() => toggleSection(key)}>
              <h3>{key}</h3>
              <img
                src="/fleche-vers-bas.svg"
                alt="toggle"
                className={`arrow ${isOpen ? 'open' : ''}`}
              />
            </div>
            {isOpen && (
              <div className="features-text">
                {value}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Features;