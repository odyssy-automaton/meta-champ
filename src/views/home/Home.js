import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Home = () => (
  <div className="View">
    <h1>Home</h1>
    <div className="Nav">
      <Link to="/new-crop">Create Crop</Link>
      <Link to="/explore">Explore</Link>
    </div>
  </div>
);
=======
const Home = () => {
  return (
    <div className="View">
      <h1>Home</h1>

      <Link to="/explore">Explore</Link>

      <Link to="/new-crop">Create Crop</Link>
    </div>
  );
};
>>>>>>> a1b543953140f30ff532be35716b0ebb6ed35345

export default Home;
