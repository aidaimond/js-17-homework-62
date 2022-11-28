import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-secondary bg-opacity-25">
      <div className="container-fluid">
        <span className="navbar-brand">Shine</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              Home
            </li>
            <li className="nav-item">
              Shop
            </li>
            <li className="nav-item">
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;