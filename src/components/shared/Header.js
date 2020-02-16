import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '3box';

import useFortmatic from '../../util/UseFortmatic';

const Header = () => {
  const {
    accounts,
    signOut,
    signIn,
    isSignedIn,
    web3Ready,
    web3IsInitialized,
  } = useFortmatic(process.env.REACT_APP_FORTMATIC_API_KEY);

  useEffect(() => {
    const setUp3Box = async () => {
      const { fm } = await web3Ready;

      if (web3IsInitialized && accounts[0]) {
        const provider = fm.getProvider();
        const box = await Box.openBox(accounts[0], provider);
        await box.syncDone;

        const space = await box.openSpace('metaChamp');

        console.log('box', box);
        console.log('space', space);
      }
    };

    setUp3Box();
  }, [accounts, web3IsInitialized]);

  return (
    <header className="App-header">
      <Link to="/">Meta Champ</Link>
      {isSignedIn(accounts) ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
