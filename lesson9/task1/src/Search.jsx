import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = { value: "" };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  alertMessage = () => {
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    console.log(this.state.value);
    return (
      <form className="search" onSubmit={this.alertMessage}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
