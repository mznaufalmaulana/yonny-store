import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img11.jpeg";
// import "../assets/css/main.css";

class Toast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="snackbar">{this.props.text}</div>;
  }
}

export default Toast;
