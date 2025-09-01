import React from 'react';
import Logo from './Logo';
import AccueilBtn from './AccueilBtn';
import AproposBtn from './AproposBtn';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <nav>
          <AccueilBtn />
          <AproposBtn />
        </nav>
      </div>
    </header>
  );
}
export default Header;