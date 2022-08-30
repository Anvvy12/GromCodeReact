import React from "react";
import UsersList from "./UsersList";
import Filter from "./Filter";

export default ({ name, age }) => {
  const usersList = [].push({ name, age });
  return (
    <div>
      <Filter filterText={}/>
      <UsersList users={usersList} />
    </div>
  );
};
