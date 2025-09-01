import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AproposBtn() {
  const location = useLocation();
  const isActive = location.pathname === '/apropos';
  
  return (
    <Link to="/apropos">
    <button className={isActive ? 'active' : ''}>Apropos</button>
    </Link>
  );
}

export default AproposBtn;
