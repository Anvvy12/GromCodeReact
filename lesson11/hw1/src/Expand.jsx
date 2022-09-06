import React, { Component } from "react";

export default class extends Component {
  state = {
    isFull: false,
  };

  toggleInfo = () => {
    this.setState({
      isFull: !this.state.isFull,
    });
  };

  render() {
    const info = this.state.isFull ? this.props.children : null;
    const arrow = this.state.isFull ? (
      <i className="fa fa-chevron-up" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-chevron-down" aria-hidden="true"></i>
    );
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleInfo}>
            {arrow}
          </button>
          <div className="expand__content">{info}</div>
        </div>
      </div>
    );
  }
}
