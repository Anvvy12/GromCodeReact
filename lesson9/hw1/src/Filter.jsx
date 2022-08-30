import React, { Component } from "react";

export default class extends Component {
  constructor({ value }) {
    super({ value });
  }
  render() {
    return (
      <div className="filter">
        <span className="filter__count"></span>
        <input type="text" className="filter__input" value="" />
      </div>
    );
  }
}

// filterText
