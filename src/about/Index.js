import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img07.jpg";
import img2 from "../assets/images/demo/img12.jpg";
import img3 from "../assets/images/demo/img13.jpg";
import Banner from "../component/Banner";
// import "../assets/css/main.css";

class Index extends React.Component {
  render() {
    return (
      <main id="mt-main">
        <Banner title="About" />
        <div class="container">
          <div class="row">
            <div class="col-xs-12"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
