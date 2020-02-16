import React from 'react';
import { Link } from 'react-router-dom';
import { CoLogo } from '../../assets/co-logo.svg';
import useFortmatic from '../../util/UseFortmatic';

const Header = () => {
  const { accounts, signOut, signIn, isSignedIn } = useFortmatic(
    process.env.REACT_APP_FORTMATIC_API_KEY,
  );

  return (
    <header className="App-header">
      <Link to="/">
        <img src={CoLogo} alt="meta champ" />
        Meta Champ
      </Link>
      {isSignedIn(accounts) ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
