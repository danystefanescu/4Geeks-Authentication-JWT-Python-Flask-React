import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const sendLogin = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-y7dho6eaapi.ws-eu86.gitpod.io/api/login",
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
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      await actions.getCurrentUserEmail();
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendLogin();
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
          Login
        </button>
        {error ? (
          <div className="alert text-black bg-danger mt-3">
            Usuario y/o contraseña incorrectos, introduzca las credenciales
            correctas.
          </div>
        ) : null}
      </form>
    </div>
  );
};
