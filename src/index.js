import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import FactContext from "./context/FactContext";
import ErrorBoundary from "./containers/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <FactContext.Provider value="">
      <App />
    </FactContext.Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
