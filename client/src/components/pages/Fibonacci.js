import React from "react";
import FibonacciForm from "../forms/FibonacciForm";

class Fibonacci extends React.Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Fibonacci</h1>
        <FibonacciForm submit={this.submit} />
      </div>
    );
  }
}

export default Fibonacci;
