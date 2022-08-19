import "./NavBar.css";
import React from "react";

import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">Tienda Bolso MultiMarca</h1>
        <ul className="nav-ul">
          <Link to="/" className="nav-li">
            Inicio
          </Link>
          <Link to="/categoria/Mochila Nike" className="nav-li">
            Bolsos Nike
          </Link>
          <Link to="/categoria/Mochila Adidas" className="nav-li">
            Bolsos Adidas
          </Link>
        </ul>
        <Link to="/cart" className="nav-li">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
