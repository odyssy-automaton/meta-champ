import React from 'react';

import useFortmatic from '../../util/UseFortmatic';

const API_KEY = process.env.REACT_APP_FORTMATIC_API_KEY;

const NewCrop = () => {
  const {
    accounts,
    signOut,
    signIn,
    isSignedIn,
    web3Ready,
    web3IsInitialized,
  } = useFortmatic(API_KEY);

  console.log('accounts', accounts);
  console.log('signOut', signOut);
  console.log('signIn', signIn);
  console.log('isSignedIn', isSignedIn);
  console.log('web3Ready', web3Ready);
  console.log('web3IsInitialized', web3IsInitialized);

  return (
    <div className="View">
      {isSignedIn(accounts) ? (
        <h1>New Crop Form</h1>
      ) : (
        <p>You need to sign in</p>
      )}
    </div>
  );
};

export default NewCrop;
