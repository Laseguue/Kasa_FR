import React from 'react';
import { Link } from 'react-router-dom';
import './FortyFour.css';

function FortyFour() {
  return (
    <div className='forty-four'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">
            <button>Retourner sur la page d'accueil</button>
        </Link>
    </div>
  );
}
export default FortyFour;