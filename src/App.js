import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header wrapper">
        <div className="row">
          <h1 className="w-100">Counter : {counter} </h1>
          <br />
          <br />
          <button
            className="col-sm btn-primary btn-sm"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increase
          </button>

          <button
            className="col-sm btn-danger btn-sm"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrease
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
