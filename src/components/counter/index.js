import React from "react";
import {Counter} from "./Counter";

const CounterView = () => {
  return (
    <div>
      <h2>Counter Component</h2>
      <Counter initialValue={5} className="counter" />
    </div>
  );
};

export default CounterView;
