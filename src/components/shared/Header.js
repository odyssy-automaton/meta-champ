import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '3box';

import CoLogo from '../../assets/co-logo.svg';
import useFortmatic from '../../util/UseFortmatic';
import { BoxContext, FortmaticContext } from '../../contexts/Store';

const Header = () => {
  
  const {
    accounts,
    signOut,
    signIn,
    isSignedIn,
    web3Ready,
    web3IsInitialized,
  } = useFortmatic(process.env.REACT_APP_FORTMATIC_API_KEY);
  const [box, setBox] = useContext(BoxContext);
  const [fortmatic, setFortmatic] = useContext(FortmaticContext);

  useEffect(() => {
    const setUp3Box = async () => {
      const { fm } = await web3Ready;

      if (web3IsInitialized && accounts[0]) {
        const provider = fm.getProvider();
        const box = await Box.openBox(accounts[0], provider);
        await box.syncDone;

        const space = await box.openSpace('metaChamp');

        setFortmatic({
          accounts,
          signOut,
          signIn,
          isSignedIn,
          web3Ready,
          web3IsInitialized,
        });

        console.log('box', box);
        console.log('space', space);
        const profile = await Box.getProfile(accounts[0]);
        const name = await box.public.get('name');
        console.log(profile);
        
        setBox({ box, space, profile, name });
      }
    };

    setUp3Box();
  }, [accounts, web3IsInitialized]);


  return (
    <header className="App-header">
      <Link to="/">
        <img src={CoLogo} alt="meta champ" />
        Meta Champ
      </Link>
      <div>
  {fortmatic && <p>{fortmatic.accounts[0]}{box && box.name ? (<span> {box.name}</span>) : (<a href={`/profile/${fortmatic.accounts[0]}`}> set name</a>)}</p>}

        </div>
      {isSignedIn(accounts) ? (
        <button onClick={() => signOut()}>Sign Out </button>

      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
