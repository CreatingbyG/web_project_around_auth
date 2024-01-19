

import React from "react";
import logo from "../images/logo.svg.svg";


const Header = ({ isUserAuthorized, currentPage }) => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo around the US" />
      <div className="navigation">
        {/* {!isUserAuthorized && currentPage !== 'login' && (
          <a className= "link" href="/login">Iniciar sesión</a>
        )} */}
        {!isUserAuthorized && currentPage !== 'register' && (
          <a className="link" href="/register">Iniciar Sesion</a>
        )}
        {/* {isAuthenticated && (
          <a className="link" href="/logout">Cerrar sesión</a>
        )} */}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Header;
