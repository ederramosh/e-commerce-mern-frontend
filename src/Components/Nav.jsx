import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Nav = () => {
  const { user: { token } } = useContext(UserContext);
  console.log( `token desde el nav ${token}` );

  const publicRoutes = [
    <li className="nav-item" key={0}>
      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
    </li>,
    <li className="nav-item" key={1}>
      <NavLink className="nav-link" to="/signup">
        Sign Up
      </NavLink>
    </li>,
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {!token && publicRoutes }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
