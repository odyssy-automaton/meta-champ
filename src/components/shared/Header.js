import React from 'react';
import { Link } from 'react-router-dom';
import { CoLogo } from '../../assets/co-logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={CoLogo} alt="meta champ" /> Meta Champ
      </Link>
    </header>
  );
};

export default Header;
