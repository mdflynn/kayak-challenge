import React from "react";
import "./Nav.scss";

import logo from "../../assets/kayak.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <img className="nav-logo" src={logo} alt="kayak logo" />
    </nav>
  );
};

export default Nav;
