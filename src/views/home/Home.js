import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="View">
    <h1>Home</h1>
    <Link to="/new-crop">Create Crop</Link>
    <Link to="/explore">Explore</Link>
  </div>
);

export default Home;
