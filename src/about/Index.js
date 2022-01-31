import React from "react";
import Banner from "../component/Banner";
import logo from "../assets/images/batuyonny.png";
import img from "../assets/images/demo/img-70.jpeg";
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
      // dots: true,
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
        <section className="mt-about-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row center-vertical">
              {/* <div className="col-xs-12">
                <IndexTabs />
              </div> */}
              <div className="col-md-6">
                <img src={logo} className="" />
              </div>
              <div className="col-md-6 text-justify">
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
            <div className="row center-vertical">
              <div className="col-md-6 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, reprehenderit? Consequuntur facilis blanditiis
                  nihil dolores. Impedit amet sunt repudiandae provident quae
                  dicta nam qui? Inventore quo numquam libero at distinctio.
                  Autem fugiat eligendi id doloremque nulla! Illo adipisci,
                  debitis tempora eligendi vero in quasi ullam recusandae
                  eveniet tenetur nam eum minima voluptatem libero obcaecati,
                  distinctio dolore at amet maiores repellendus. Eos dicta esse
                  possimus velit accusantium ducimus optio tempora totam, quam
                  commodi officiis ex saepe laudantium deserunt aliquam voluptas
                  vitae excepturi dolorum aliquid unde tenetur animi obcaecati
                  nam minima. Debitis. Ea, dolorum fugit saepe voluptatem
                  voluptate reprehenderit. Asperiores ea molestias id inventore
                  cum quaerat esse dolore corporis, ipsum non. Perspiciatis ut
                  blanditiis deleniti minima accusamus soluta perferendis at
                  beatae quae? Vero earum nemo, consequuntur maiores distinctio
                  deserunt quia tempora fugit ad. Laboriosam praesentium
                  sapiente in accusamus quas corporis. Aspernatur iste quidem
                  nemo consequuntur perspiciatis alias repellat eligendi culpa
                  repellendus odio! Illo enim fuga pariatur consectetur deleniti
                  ducimus recusandae nisi tempore nam, omnis sapiente sit magni
                  voluptates dolorum earum corporis beatae ab rem, ea, alias
                  qui? Natus officiis vel porro facere. Beatae repudiandae
                  tenetur alias at odit incidunt eum qui voluptatem, sequi quam
                  maxime possimus similique laboriosam! Vel illum natus eum
                  debitis, velit quam non fugiat corrupti rerum possimus
                  laudantium libero. Impedit, nihil delectus animi autem
                  deleniti iste suscipit cupiditate, et expedita voluptatum
                  error accusamus fugiat in consectetur harum iusto doloremque
                  nemo, architecto ipsa maxime incidunt corporis? Ipsam labore
                  consectetur a?
                </p>
              </div>
              <div className="col-md-6">
                <img src={logo} className="" />
              </div>
            </div>
            <div>
              <h2 className="text-center text-uppercase list-client">
                Our Projects
              </h2>
              <hr />
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
              <hr />
            </div>
            <h2 className="text-center text-uppercase list-client">
              Our Clients
            </h2>
            <hr />
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
          </div>
        </section>
      </main>
    );
  }
}

export default Index;
