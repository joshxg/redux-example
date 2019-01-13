import React, { Component } from "react";

import { Button } from "@material-ui/core";

import "./App.css";
import ErrorBoundary from "../containers/ErrorBoundary";
import withFact from "../context/withFact";
import getFact from "../utilities/requests/getFact";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fact: null
    };
  }

  click = endpoint => async () => {
    try {
      const fact = await getFact(endpoint);
      this.setState({ fact });
    } catch (error) {
      this.setState(() => {
        throw error;
      });
    }
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            <h1>Number trivia!</h1>
            <p style={{ height: 200 }}>{this.state.fact}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "30%"
              }}
            >
              <Button
                style={{ backgroundColor: "#FF0000" }}
                onClick={this.click("trivia")}
              >
                <span style={{ color: "white" }}>Trivia</span>
              </Button>
              <Button
                style={{ backgroundColor: "#FF0000" }}
                onClick={this.click("math")}
              >
                <span style={{ color: "white" }}>Math</span>
              </Button>
              <Button
                style={{ backgroundColor: "#FF0000" }}
                onClick={this.click("year")}
              >
                <span style={{ color: "white" }}>Year</span>
              </Button>
              <Button
                style={{ backgroundColor: "#FF0000" }}
                onClick={this.click("date")}
              >
                <span style={{ color: "white" }}>Date</span>
              </Button>
            </div>
          </header>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withFact(App);
