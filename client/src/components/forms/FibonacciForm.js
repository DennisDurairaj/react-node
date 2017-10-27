import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
// import PropTypes from "prop-types";

export default class FibonacciForm extends Component {
  state = {
    data: {
      count: ""
    },
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    this.props.submit(this.state.data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor="count">Count</label>
            <input
              type="number"
              name="count"
              placeholder="Enter sequence for fibonacci"
              value={this.state.data.count}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button primary>Calculate</Button>
        </Form>
      </div>
    );
  }
}
