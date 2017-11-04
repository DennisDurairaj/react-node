import React from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

class HomePage extends React.Component {
  getFibo = () => {
    axios.get("http://46.101.216.250:9000/api/fibonacci").then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <h1>Node server</h1>
        <Button onClick={this.getFibo} primary>
          Calculate fibonacci
        </Button>
      </div>
    );
  }
}

export default HomePage;
