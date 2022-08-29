import React, { Component } from "react";

class Dimension extends Component {
  state = {
    width: innerWidth,
    height: innerHeight,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimention(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (event) => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimention(innerWidth, innerHeight);
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
  };

  setDimention = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth}px x ${innerHeight}px`;
  };

  render() {
    return (
      <>
        <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
      </>
    );
  }
}

export default Dimensions;
