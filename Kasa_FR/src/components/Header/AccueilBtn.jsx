import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AccueilBtn() {
  const location = useLocation();
  const isActive = location.pathname === '/';
  
  return (
    <Link to="/">
    <button className={isActive ? 'active' : ''}>Accueil</button>
    </Link>
  );
}

export default AccueilBtn;
