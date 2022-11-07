import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ItemContext } from "../Context/ItemContext";

const Nav = () => {
  const {
    user: { token, firstname, lastname },
  } = useContext(UserContext);

  const { sale } = useContext(ItemContext);

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
    <>
    <div className="row container-fluid">
      <div className="col-8">

      <nav className="navbar navbar-expand-lg background-sub-nav">
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/gamer">
                  PC Gamer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/laptop">
                  Laptop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/streaming">
                  Streaming
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/gadgets">
                  Gadgets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/refurbished">
                  Refurbished
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </div>
      <div className="col-4 ">

      <nav className="navbar navbar-expand-lg justify-content-end">
        <div>
          <div className="collapse navbar-collapse" id="navbarNav ">
            <ul className="navbar-nav">
              {token && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">   
                    {firstname} {lastname}
                  </NavLink>
                </li>
              )}
              {token && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/item-list">   
                    My Cart ({sale.length} items)
                  </NavLink>
                </li>
              )}
              {token && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              )}
              {!token && publicRoutes}
            </ul>
          </div>
        </div>
      </nav>

      </div>
    </div>
      

      
    </>
  );
};

export default Nav;
