import React from "react";

const UserForm = (props) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={props.userData.firstName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={props.userData.lastName}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default UserForm;
