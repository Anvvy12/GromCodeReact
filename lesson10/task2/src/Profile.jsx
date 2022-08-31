import React from "react";
import UserForm from "./UserForm";

const Profile = ({ userData, handleChange }) => {
  return (
    <div className="column">
      <UserForm userDate={userData} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
