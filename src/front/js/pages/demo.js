import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCurrentUserEmail();
  }, []);

  return <div className="container">Hello, User {store.currentUserEmail} </div>;
};
