import React, { Component } from 'react';

// Staless Funciotnal Component

const NavBar = ({totalCounters}) => {
  console.log('Navbar - rendered');
  return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
    Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </a>
    </nav>
)
}

export default NavBar;
