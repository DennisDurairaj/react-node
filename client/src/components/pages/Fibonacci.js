import axios from "axios";
import React from "react";
// import FibonacciForm from "../forms/FibonacciForm";

class Fibonacci extends React.Component {
  submit = data => {
    axios
      .post("http://46.101.216.250:9000/api/fibonacci", { data })
      .then(res => res.data);
  };

  render() {
    return (
      <div>
        <h1>Fibonacci</h1>
        {/* <FibonacciForm submit={this.submit} /> */}
      </div>
    );
  }
}

export default Fibonacci;
