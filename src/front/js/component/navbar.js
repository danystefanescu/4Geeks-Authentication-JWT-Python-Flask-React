import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-white">
            JWT Extended with React and Flask - Home
          </span>
        </Link>
        {store.currentUserEmail ? (
          <div>
            <button
              className="btn btn-danger"
              onClick={async () => {
                if (await actions.logout()) {
                  navigate("/login");
                }
              }}
            >
              Log-Out
            </button>
          </div>
        ) : (
          <>
            <div>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button className="btn btn-success">Register</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
