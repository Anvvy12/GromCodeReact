import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

// const rootElem = document.querySelector("#root");

export default (props) => {
  return (
    <div className="search">
      <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

// ReactDOM.render(<Search name="Tom" age={21} />, rootElem);
