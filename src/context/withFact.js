import React from "react";
import FactContext from "./FactContext";

function withFact(Component) {
  return function FactConsumerComponent(props) {
    return (
      <FactContext.Consumer>
        {fact => <Component {...props} fact={fact} />}
      </FactContext.Consumer>
    );
  };
}

export default withFact;
