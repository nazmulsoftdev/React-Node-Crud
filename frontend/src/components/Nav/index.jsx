import React from "react";

import { Link } from "react-router-dom";
import styled from "./Nav.module.css";

function NavBar() {
  return (
    <div className={styled.NavWrapper}>
      <nav className={styled.NavBar}>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </nav>
    </div>
  );
}

export default NavBar;
