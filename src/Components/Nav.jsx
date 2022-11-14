import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="row container-fluid background-sub-nav">
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/gamer"
                    >
                      PC Gamer
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/laptop"
                    >
                      Laptop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/streaming"
                    >
                      Streaming
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/gadgets"
                    >
                      Gadgets
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light fw-semibold"
                      aria-current="page"
                      to="/refurbished"
                    >
                      Refurbished
                    </NavLink>
                  </li>
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
