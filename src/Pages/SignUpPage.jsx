import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import { signUp } from "../Services/clientService";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { saveToken } = useContext(UserContext);

  const OnSubmitted = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData);
    const { token, rol, firstname, lastname, error } = await signUp(userInfo);
    saveToken(token, firstname, lastname, rol);
    if (error) {
      console.log(error);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={OnSubmitted}>
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
      </form>
    </>
  );
};

export default SignUpPage;
