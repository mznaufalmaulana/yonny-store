import React from "react";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import API from "../services";

require("../home/style.css");

class Index extends React.Component {
  state = {
    promoHeadline: [],
    promo: [],
    collection: [],
  };

  componentDidMount() {
    API.get("promo/headline/list").then((result) => {
      if (result.message === "success") {
        this.setState({ promoHeadline: result.data });
      }
    });

    API.get("promo/list").then((result) => {
      if (result.message === "success") {
        this.setState({ promo: result.data });
      }
    });

    API.get(`product/related/8`).then((result) => {
      if (result.message === "success") {
        this.setState({ collection: result.data });
      }
    });
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: false,
    };

    return (
      <div>
        <Helmet>
          <title>Batu Yonny | Home</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Batu Yonny Mamer Tulungagung" />
        </Helmet>
        <div className="mar-top-1">
          <Slider {...settings}>
            {this.state.promoHeadline.map((promoHead, index) => (
              <a href={promoHead.link} key={index}>
                <div
                  className="s-holder wow fadeInLeft each-fade banner-slider"
                  data-wow-delay="0.4s"
                >
                  <img
                    src={`${API.urlStorage}${promoHead.photo_name}`}
                    className="img img-responsive"
                  />
                </div>
              </a>
            ))}
          </Slider>
        </div>

        <main id="mt-main">
          <div className="container mar-top-promo">
            <div className="row">
              <div className="col-sm-4 col-md-4 wow fadeInLeft image-zoom-promo">
                {this.state.promo.map((promo, index) => {
                  const order = [0];
                  return order.includes(index) ? (
                    <a href={promo.link} key={promo.id}>
                      <img
                        alt="image description"
                        className="img-responsive mar-bot-promo-tengah"
                        src={`${API.urlStorage}${promo.photo_name}`}
                      />
                    </a>
                  ) : null;
                })}
              </div>
              <div className="col-sm-4 col-md-4">
                {this.state.promo.map((promo, index) => {
                  const order = [1, 2];
                  return order.includes(index) ? (
                    <div
                      className="mar-bot-promo-tengah wow fadeInLeft image-zoom-promo"
                      key={promo.id}
                    >
                      <a href={promo.link} className="">
                        <img
                          alt="image description"
                          className="img-responsive"
                          src={`${API.urlStorage}${promo.photo_name}`}
                        />
                      </a>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="col-sm-4 col-md-4 wow fadeInLeft image-zoom-promo">
                {this.state.promo.map((promo, index) => {
                  const order = [3];
                  return order.includes(index) ? (
                    <a href={promo.link} key={promo.id}>
                      <img
                        alt="image description"
                        className="img-responsive"
                        src={`${API.urlStorage}${promo.photo_name}`}
                      />
                    </a>
                  ) : null;
                })}
              </div>
              <br />
              <br />
            </div>
          </div>

          <div
            className="mt-bestseller mar-top-2 text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 mt-heading text-uppercase">
                  <h2 className="heading">Collection</h2>
                  <p>GREAT QUALITY PRODUCT</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 z-index">
                  <MultiCarousel
                    ssr={true}
                    deviceType={this.props.deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                  >
                    {this.state.collection.map((collection) => (
                      <div
                        className="image-zoom-collection collection-name wow fadeInUp"
                        data-wow-delay="0.4s"
                        key={collection.id}
                      >
                        <a href={`/product/detail?product=${collection.id}`}>
                          <img
                            draggable={false}
                            src={`${API.urlStorage}${collection.photo_name}`}
                          />
                          <strong>{collection.product_name}</strong>
                        </a>
                      </div>
                    ))}
                  </MultiCarousel>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
