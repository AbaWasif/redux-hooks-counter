import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
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
  );
};

export default Counter;
