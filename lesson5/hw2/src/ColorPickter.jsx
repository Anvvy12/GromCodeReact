import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorText: "",
    };
  }
  printColor = (colorText) => {
    this.setState({ colorText });
  };

  clear = () => {
    this.setState({ colorText: "" });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.printColor("coral")}
            onMouseLeave={() => this.clear()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.printColor("aqua")}
            onMouseLeave={() => this.clear()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.printColor("bisque")}
            onMouseLeave={() => this.clear()}
          ></button>
        </div>
      </div>
    );
  }
}
