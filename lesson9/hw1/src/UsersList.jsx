import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <ul className="users">
        <li className="user">
          <span className="user__name">Tad</span>
          <span className="user__age">18</span>
        </li>
        <li className="user">
          <span className="user__name">Anna</span>
          <span className="user__age">45</span>
        </li>
        <li className="user">
          <span className="user__name">Bob</span>
          <span className="user__age">45</span>
        </li>
        <li className="user">
          <span className="user__name">Mark</span>
          <span className="user__age">45</span>
        </li>
      </ul>
    );
  }
}
