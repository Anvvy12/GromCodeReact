import React from "react";
import "./styles/index.scss";

import UserForm from "./UserForm.jsx";

export default () => {
  const createUser = (user) => {
    console.log(user);
  };
  return <UserForm onSubmit={createUser} />;
};
