const parse5 = require('parse5');

import React from "react";
import logo from "../images/logo.svg.svg";

function AppHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo around the US" />
      <div className="line"></div>
    </div>
  );
}

export default AppHeader;
