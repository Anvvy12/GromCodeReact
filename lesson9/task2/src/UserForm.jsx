import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    student: "",
    occupation: "",
    about: "",
  };
  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htnlfor="name">
            Name
          </label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="form-label" htnlfor="student">
            Student
          </label>
          <input
            value={this.state.student}
            onChange={this.handleChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htnlfor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            value={this.state.occupation}
            onChange={this.handleChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htnlfor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            value={this.state.about}
            onChange={this.handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
