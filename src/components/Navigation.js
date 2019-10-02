import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className="nav-item">
          
          <Link className="Nav-link" to="/">Home</Link>
          <Link className="Nav-link" to="/about">About</Link>
          <Link className="Nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
