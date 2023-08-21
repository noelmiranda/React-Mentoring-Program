import React from 'react';
import "./counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue || 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;

    const decrementButton = React.createElement(
      "button",
      {  className: "btn-decrement", onClick: this.handleDecrement },
      "Decrement"
    );

    const incrementButton = React.createElement(
      "button",
      { className: "btn-increment", onClick: this.handleIncrement },
      "Increment"
    );

    const counterValue = React.createElement(
      "div",
      { className: "counter-value", "data-testid": "count" }, // Add data-testid attribute here
      `Count: ${value}`
    );


    const counterComponent = React.createElement(
      "div",
       { className: "counter-component" },
      null,
      counterValue,
      decrementButton,
      incrementButton
    );

    return counterComponent;
  }
}

// Example usage:
// const initialValue = 5;
// const counterElement = React.createElement(Counter, { initialValue });
// ReactDOM.render(counterElement, document.getElementById("root"));
