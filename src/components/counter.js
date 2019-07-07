import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const countIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const countDecrease = () => {
    dispatch({ type: "Decrement" });
  };

  // componentDidMount
  useEffect(() => {
    console.log("This is my Counter App");
  }, []);
  // componentDidUpdate
  useEffect(() => console.log("Counter updated..."));

  return (
    <div className="row">
      <h1 className="w-100">Counter : {counter} </h1>
      <br />
      <br />
      <button className="col-sm btn-primary btn-sm" onClick={countIncrease}>
        Increase
      </button>

      <button className="col-sm btn-danger btn-sm" onClick={countDecrease}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
