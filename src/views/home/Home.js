import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="View">
      <h1>Home</h1>

      <Link to="/explore">Explore</Link>

      <Link to="/new-crop">Create Crop</Link>
    </div>
  );
};

export default Home;
