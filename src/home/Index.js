import React from "react";
import { Slide } from "react-slideshow-image";
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
                    className="slider-7 mt-paddingbottomsm wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <div className="slide-container">
                      <Slide>
                        {this.state.promoHeadline.map((promoHead) => (
                          <a href={promoHead.link}>
                            <div
                              className="s-holder wow fadeInLeft"
                              data-wow-delay="0.4s"
                              key={promoHead.id}
                            >
                              <img
                                src={`${API.urlStorage}${promoHead.photo_name}`}
                              />
                            </div>
                          </a>
                        ))}
                      </Slide>
                    </div>
                  </div>

                  <div className="banner-box third" data-wow-delay="0.4s">
                    {this.state.promo.map((promo, index) => {
                      const order = [0, 1];
                      return order.includes(index) ? (
                        <a href={promo.link}>
                          <div
                            className={`banner-${
                              12 + index
                            } right white wow fadeInRight`}
                            data-wow-delay="0.4s"
                            key={promo.id}
                          >
                            <img src={`${API.urlStorage}${promo.photo_name}`} />
                          </div>
                        </a>
                      ) : null;
                    })}
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
        </main>
      </div>
    );
  }
}

export default Index;
