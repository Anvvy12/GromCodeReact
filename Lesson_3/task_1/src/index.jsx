import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

const rootElem = document.querySelector("#root");

const Greeting = () => {
  const element = (
    <div class="search">
      <h1 class="search__title">Hello, Tom. What to search for you?</h1>
      <div class="search__field">
        <input type="text" class="search__input" />
        <button class="search__button">Search</button>
      </div>
    </div>
  );
  return element;
};

ReactDOM.render(<Greeting />, rootElem);
