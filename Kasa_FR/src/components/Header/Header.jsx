import React from 'react';
import Logo from './Logo';
import AccueilBtn from './AccueilBtn';
import AproposBtn from './AproposBtn';
function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <AccueilBtn />
        <AproposBtn />
      </nav>
    </header>
  );
}
export default Header;