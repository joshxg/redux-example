import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorState: false,
      errorMessage: null
    };
  }

  componentDidCatch(error) {
    console.log("cdc");
    if (error.request) {
      // There was an error on the server side,
      // status code was not 2xx
      console.log(error);
      this.setState({ errorState: true, errorMessage: "error!" });
    } else if (error.response) {
      // There was an error with the request, it never received
      // a response.
      console.log(error);
      this.setState({ errorState: true, errorMessage: "error!" });
    } else {
      // There has been some other error

      this.setState({ errorState: true, errorMessage: "error!" });
    }
  }

  render() {
    return (
      <div>
        <p style={{ color: "black", backgroundColor: "#00a3a3" }}>
          {this.state.errorMessage}
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
