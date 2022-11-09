import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ItemContext } from "../Context/ItemContext";

const UserNavBar = () => {
  const {
    user: { token, firstname, lastname },
  } = useContext(UserContext);

  const { sale } = useContext(ItemContext);

  const publicRoutes = [
    
      <NavLink className="nav-link d-inline mx-2" key={0} to="/login">
        Log In
      </NavLink>,
    
      <NavLink className="nav-link d-inline mx-2" key={1} to="/signup">
        Sign Up
      </NavLink>
    
  ];

  return (
    <>
      <div className="row my-3 text-end container-fluid">
        <div className="col">
                  {token && (
                      <NavLink className="nav-link d-inline mx-2" to="/profile">
                        {firstname} {lastname}
                      </NavLink>
                  )}
                  {token && (
                      <NavLink className="nav-link d-inline mx-2" to="/item-list">
                        My Cart ({sale.length} items)
                      </NavLink>
                  )}
                  {token && (
                      <NavLink className="nav-link d-inline mx-2" to="/logout">
                        Logout
                      </NavLink>
                  )}
                  {!token &&
                  <div>
                    {publicRoutes}
                  </div> 
                   }
              </div>
            </div>
          
    </>
  );
};

export default UserNavBar;
