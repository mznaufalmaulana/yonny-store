import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../component/Banner";
import imgCompany from "../assets/images/showRoom.png";
import imgFactory from "../assets/images/howWeMade.png";
require("../about/style.css");

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <main id="mt-main">
        <Helmet>
          <title>Batu Yonny | About</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Batu Yonny Mamer Tulungagung" />
        </Helmet>
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
                <p className="blog-text">
                  Batu Yonny has been operating in Tulungagung, Indonesia since
                  the 1980s. Since then, we have become one of the largest
                  factories and exporters of natural stone in our region. We are
                  proud to have earned our reputation for providing good
                  customer service and quality products available in our
                  industry. Our staff is experienced and knowledgeable, creating
                  a new design as per customer’s special request, and we are
                  open to discuss with them any time.
                </p>

                <p className="blog-text">
                  We also have partners with international shipping companies to
                  export our stone products to numerous countries around the
                  globe, including the United States, Italy, India, Turkey,
                  China, Taiwan, Korea, Austria, Germany, and many other
                  international markets.
                </p>

                <p className="blog-text">
                  Batu Yonny’s commitment is to ensure customer’s satisfaction
                  by creating projects of the highest quality, durability, and
                  beauty. We have the resources, connections, and knowledge
                  needed to provide you with the best service and products at
                  competitive prices.
                </p>

                <p className="blog-text">
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
                <h2 className="text-uppercase about-title">HOW WE MADE</h2>
                <p className="blog-text">
                  Batuyonny's products are made by local professionals from
                  Tulungagung to produce the best quality in the world. All
                  products are handcrafted with minimal machine assistance to
                  maintain the quality of the production.
                </p>
                <p className="blog-text">
                  The results of the highest quality products are made carefully
                  and consistently in every detail of the product. Highly
                  skilled professionals from Tulungagung are able to produce
                  quality products on a large scale.
                </p>
                <p className="blog-text">
                  Batuyonny will continue to improvise and innovate in
                  developing products to produce the best models and quality.
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
