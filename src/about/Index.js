import React from "react";
import Banner from "../component/Banner";
import logo from "../assets/images/batuyonny.png";
import imgCompany from "../assets/images/company.jpeg";
import imgFactory from "../assets/images/factory.jpeg";
import Slider from "react-slick";
require("../about/style.css");

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <main id="mt-main">
        <Banner title="About" />
        <section
          className="mt-about-sec wow fadeInUp about-section"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col col-md-6 col-sm-12">
                <img src={imgCompany} className="img-responsive" />
              </div>
              <div className="col col-md-6 col-sm-12 text-justify">
                <h2 className="about-title">COMPANY PROFILE</h2>
                <p>
                  Batu Yonny has been operating in Tulungagung, Indonesia since
                  the 1980s. Since then, we have become one of the largest
                  factories and exporters of natural stone in our region. We are
                  proud to have earned our reputation for providing good
                  customer service and quality products available in our
                  industry. Our staff is experienced and knowledgeable, creating
                  a new design as per customer’s special request, and we are
                  open to discuss with them any time.
                </p>

                <p>
                  We also have partners with international shipping companies to
                  export our stone products to numerous countries around the
                  globe, including the United States, Italy, India, Turkey,
                  China, Taiwan, Korea, Austria, Germany, and many other
                  international markets.
                </p>

                <p>
                  Batu Yonny’s commitment is to ensure customer’s satisfaction
                  by creating projects of the highest quality, durability, and
                  beauty. We have the resources, connections, and knowledge
                  needed to provide you with the best service and products at
                  competitive prices.
                </p>

                <p>
                  We invite you to visit our showroom and factory at Tulungagung
                  location and we look forward to working with you.
                </p>
              </div>
            </div>
            <br />
            <div className="row mar-top-5">
              <div className="col-md-6 col-sm-12 hidden-md hidden-lg">
                <img src={imgFactory} className="img-responsive" />
              </div>
              <div className="col-md-6 col-sm-12 text-justify">
                <h2 className="text-uppercase about-title">PROCESS</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam accusamus veniam velit distinctio repellat? Tempora,
                  qui. Numquam ab sequi illum enim temporibus libero eligendi ex
                  itaque similique, voluptatibus doloribus officia est illo sit,
                  totam laborum quidem consectetur eum mollitia vitae. Culpa ex
                  consequuntur dolores maxime animi provident vero dolorum id.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam accusamus veniam velit distinctio repellat? Tempora,
                  qui. Numquam ab sequi illum enim temporibus libero eligendi ex
                  itaque similique, voluptatibus doloribus officia est illo sit,
                  totam laborum quidem consectetur eum mollitia vitae. Culpa ex
                  consequuntur dolores maxime animi provident vero dolorum id.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam accusamus veniam velit distinctio repellat? Tempora,
                  qui. Numquam ab sequi illum enim temporibus libero eligendi ex
                  itaque similique, voluptatibus doloribus officia est illo sit,
                  totam laborum quidem consectetur eum mollitia vitae. Culpa ex
                  consequuntur dolores maxime animi provident vero dolorum id.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 hidden-sm hidden-xs">
                <img src={imgFactory} className="img-responsive" />
              </div>
            </div>
            {/* <div className="mar-top-5">
              <h2 className="text-center text-uppercase list-client">
                Our Projects
              </h2>              
              <Slider {...settings}>
                <div>
                  <img src={img} className="" />
                </div>
                <div>
                  <img src={img} className="" />
                </div>
                <div>
                  <img src={img} className="" />
                </div>
                <div>
                  <img src={img} className="" />
                </div>
                <div>
                  <img src={img} className="" />
                </div>
                <div>
                  <img src={img} className="" />
                </div>
              </Slider>              
            </div> */}

            {/* <br /> */}
            {/* <div className="mar-top-5">
              <h2 className="text-center text-uppercase list-client">
                Our Clients
              </h2>
              <div className="row center-vertical list-client">
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
              </div>
              <div className="row center-vertical list-client">
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
              </div>
              <div className="row center-vertical list-client">
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
                <div className="col-md-3">
                  <img src={logo} className="" />
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    );
  }
}

export default Index;
