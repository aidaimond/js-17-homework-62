import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-secondary bg-opacity-50">
      <div className="container-fluid">
        <span className="navbar-brand">Shine</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Магазин
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/basket" className="nav-link">
                Корзина
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;