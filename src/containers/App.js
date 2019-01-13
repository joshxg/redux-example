import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import "./App.css";
import ErrorBoundary from "../containers/ErrorBoundary";
import { getFact } from "../context/actions/action";

class App extends Component {
  click = endpoint => () => {
    const { getFact } = this.props;
    getFact(endpoint);
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            <h1>Number trivia!</h1>
            <p style={{ height: 200 }}>{this.props.fact}</p>
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

const mapStateToProps = state => {
  return {
    fact: state.fact,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFact: endpoint => {
      dispatch(getFact(endpoint));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
