import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import { login } from '../Services/clientService';

const LoginPage = () => {
  
  const navigate = useNavigate();
  const { saveToken } = useContext(UserContext);

  const OnSubmitted = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData);
    const {token, rol, firstname, lastname, error} = await login(userInfo);
    saveToken(token, firstname, lastname, rol);
    if(error) {
      console.log(error);
    } else {
      navigate('/');
    }

  }

  return (
    <>
      <form onSubmit={OnSubmitted}>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </div>
        <div className="row">
          <span>No tienes cuenta?</span>
          <NavLink to='/signup'>
            Registrate!
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
