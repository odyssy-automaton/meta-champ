import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FortmaticContext } from '../../contexts/Store';

const Home = () => {
  const [fortmatic] = useContext(FortmaticContext);

  return (
    <div className="View">
      <h1>Home</h1>

      <Link to="/explore">Explore</Link>

{fortmatic && fortmatic.accounts[0] ? (
      <Link to="/new-sample">New Sample</Link>
    ) : null}

    </div>
  );
};

export default Home;
