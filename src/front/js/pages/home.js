import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <p className="text-black text-uppercase font-weight-bold">
        {store.currentUserEmail
          ? "Hello " + store.currentUserEmail
          : "Please login or register"}
      </p>
    </div>
  );
};
