import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="appContainer">
      <Link to="/" className="logo">React Examples</Link>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
}
