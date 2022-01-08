import React from "react";
// import { Slide, Fade } from "react-slideshow-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import API from "../services";

class Index extends React.Component {
  state = {
    promoHeadline: [],
    promo: [],
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
  }

  render() {
    const { promoHeadline } = this.state;
    const properties = {
      showArrows: false,
      showStatus: false,
      showIndicators: true,
      infiniteLoop: true,
      showThumbs: false,
      useKeyboardArrows: true,
      autoPlay: true,
      stopOnHover: true,
      swipeable: true,
      dynamicHeight: true,
      emulateTouch: true,
      selectedItem: promoHeadline.length,
      interval: 7000,
      transitionTime: 2000,
    };

    return (
      <div>
        <div class="mt-main-slider">
          <div class="slider banner-slider">
            <div
              class="holder text-center"
              style={{ backgroundImage: "url(http://placehold.it/1920x585)" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="text centerize">
                      <strong class="title">FURNITURE DESIGNS IDEAS</strong>
                      <h1>LIGHTING</h1>
                      <h2>PENDANT LAMPS</h2>
                      <div class="txt">
                        <p>
                          Consectetur adipisicing elit. Beatae accusamus, optio,
                          repellendus inventore
                        </p>
                      </div>
                      <a href="product-detail.html" class="shop">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="holder text-center"
              style={{ backgroundImage: "url(http://placehold.it/1920x585)" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="text right">
                      <strong class="title">FURNITURE DESIGNS IDEAS</strong>
                      <h1>LOUNGE CHAIRS</h1>
                      <h2>SW DAYBED</h2>
                      <div class="txt">
                        <p>
                          Consectetur adipisicing elit. Beatae accusamus, optio,
                          repellendus inventore
                        </p>
                      </div>
                      <a href="product-detail.html" class="shop">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="holder text-center"
              style={{ backgroundImage: "url(http://placehold.it/1920x585)" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="text">
                      <strong class="title">FURNITURE DESIGNS IDEAS</strong>
                      <h1>CARDBOARD</h1>
                      <h2> Sofas and Armchairs</h2>
                      <div class="txt">
                        <p>
                          Consectetur adipisicing elit. Beatae accusamus, optio,
                          repellendus inventore
                        </p>
                      </div>
                      <a href="product-detail.html" class="shop">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main id="mt-main">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-frame mt-paddingsmzero">
                  <div
                    className="slider-7 mt-paddingbottomsm"
                    data-wow-delay="0.4s"
                  >
                    <div className="slide banner-slider">
                      <Carousel
                        {...properties}
                        // renderIndicator={(onClickHandler, isSelected, index, label) => {
                        //   const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
                        //   const style = isSelected
                        //     ? { ...defStyle, color: "blue" }
                        //     : { ...defStyle };
                        //   return (
                        //     <span
                        //       style={style}
                        //       onClick={onClickHandler}
                        //       onKeyDown={onClickHandler}
                        //       value={index}
                        //       key={index}
                        //       role="button"
                        //       tabIndex={0}
                        //       aria-label={`${label} ${index + 1}`}
                        //     >
                        //       {"tab " + index}
                        //     </span>
                        //   );
                        // }}
                      >
                        {this.state.promoHeadline.map((promoHead) => (
                          <a href={promoHead.link}>
                            <div
                              className="s-holder wow fadeInLeft each-fade"
                              data-wow-delay="0.4s"
                              key={promoHead.id}
                            >
                              <img
                                src={`${API.urlStorage}${promoHead.photo_name}`}
                              />
                            </div>
                          </a>
                        ))}
                      </Carousel>
                    </div>
                  </div>

                  <div
                    className="banner-frame nospace wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {this.state.promo.map((promo, index) => {
                      const order = [2, 3, 4];
                      return order.includes(index) ? (
                        <a href={promo.link}>
                          <div
                            className={`banner-${
                              7 + index
                            } right white wow fadeInUp`}
                            data-wow-delay="0.4s"
                            key={promo.id}
                          >
                            <img src={`${API.urlStorage}${promo.photo_name}`} />
                          </div>
                        </a>
                      ) : null;
                    })}
                  </div>
                  <br />
                  <br />
                  <br />
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
