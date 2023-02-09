import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const registerLogin = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-y7dho6eaapi.ws-eu86.gitpod.io/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      navigate("/login");
    } else {
      setError(data.response);
    }
  };

  return (
    <div className="log-form">
      <h2>Register your account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerLogin();
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setError(false);
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-customized">
          Register
        </button>
        {error ? (
          <div className="alert text-black bg-danger mt-3">{error}</div>
        ) : null}
      </form>
    </div>
  );
};
