import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import { login } from '../Services/clientService';

const LoginPage = () => {
  
  const navigate = useNavigate();
  const { saveToken } = useContext(UserContext);

  const [ validator, setValidator ] = useState(false);
  const [ msg, setMsg ] = useState("");

  const OnSubmitted = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData);
    const {token, rol, firstname, lastname, idClient, error} = await login(userInfo);
    saveToken(token, firstname, lastname, rol, idClient);
    
    if(error) {
      console.log(error);
      setMsg(error);
      setValidator(true);
      setTimeout(() => {
        setValidator(false)
        setMsg("");
      }, 3000);
    } else {
      navigate('/');
    }

  }

  return (
    <>
      <form onSubmit={OnSubmitted} className="form-container">
        <div className="row my-3">
          <div className="col">
            <label htmlFor="email" className="form-label ">
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
          <div className="col text-center">
          {validator &&
          <div className="row my-4 text-center fs-5 text-white bg-danger rounded">
            <div className="col my-2">
              { msg }
            </div>
          </div>
        }
            <button type="submit" className="btn btn-primary mb-3 px-5">
              Submit
            </button>
          </div>
        </div>
        <div className="row text-center">
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
