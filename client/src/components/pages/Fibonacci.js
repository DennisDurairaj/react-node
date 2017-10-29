import React from "react";
import FibonacciForm from "../forms/FibonacciForm";
import axios from "axios";

class Fibonacci extends React.Component {
  submit = data => {
    axios.post("/api/fibonacci", { data }).then(res => res.data);
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
