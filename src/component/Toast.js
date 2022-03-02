import React from "react";

class Toast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="snackbar">{this.props.text}</div>;
  }
}

export default Toast;
