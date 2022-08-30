import React from "react";
import UserForm from "./UserForm";

export default () => {
  const createUser = (user) => {
    console.log(user);
  };
  return <UserForm onSubmit={createUser} />;
};
