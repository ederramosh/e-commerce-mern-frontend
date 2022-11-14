import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import { signUp } from "../Services/clientService";

const SignUpPage = () => {
  const [validator, setValidator] = useState({});

  const navigate = useNavigate();
  const { saveToken } = useContext(UserContext);

  const [visible, setVisible] = useState(false);

  const OnSubmitted = async (e) => {
    e.preventDefault();

    if (validator.password === validator.secondPassword) {
      
      const formData = new FormData(e.target);
      const userInfo = Object.fromEntries(formData);
      const { token, rol, firstname, lastname, idClient, error } = await signUp(
        userInfo
      );
      saveToken(token, firstname, lastname, rol, idClient);
      if (error) {
        console.log(error);
      } else {
        navigate("/");
      }
    } else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false); 
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setValidator({
      ...validator,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={OnSubmitted} className="form-container">
        <div className="row my-3">
          <div className="col">
            <label htmlFor="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="Write your firstname"
              required
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Write your lastname"
              required
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Write your address"
              required
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Write your phone"
              required
            />
          </div>
        </div>
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
              required
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
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="secondPassword" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="secondPassword"
              name="secondPassword"
              placeholder="Repeat Password"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {visible &&
          <div className="row my-4 text-center fs-5 text-white bg-danger rounded">
            <div className="col my-2">
              Ooopss... Passwords are not the same!
            </div>
          </div>
        }
        <div className="row my-4">
          <div className="col text-center">
            <button type="submit" className="btn btn-primary mb-3 px-5">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
