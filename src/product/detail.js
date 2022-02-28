import React from "react";
import API from "../services";
import ModalSendEmail from "./modal/SendEmailProductModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toast from "../component/Toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URLSearchParams(this.props.location.search);
    this.state = {
      data: "",
      contact: "",
      photo: [],
      related: [],
      param: {
        product: this.url.get("product"),
      },
      question: {
        name: "",
        email: "",
        message: "",
      },
      toast: {
        show: false,
        text: "",
      },
      openModal: false,
      sliderLength: "",
    };
  }

  componentDidMount() {
    const { param } = this.state;

    API.get(`product/detail/seen-count/${param.product}`);

    API.get(`product/detail/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.setState({
          data: result.data[0],
          photo: result.data[0].photo,
        });
        this.relatedProduct(result.data[0].product_category[0].id);
      }
    });

    API.get("contact/onfooter").then((result) => {
      if (result.message === "success") {
        this.setState({ contact: result.data[0] });
      }
    });
  }

  relatedProduct(idCategory) {
    API.get(`product/related/${idCategory}`).then((result) => {
      if (result.data.length > 4) {
        this.setState({
          related: result.data.slice(0, 4),
        });
      } else {
        this.setState({
          related: result.data.slice(0, result.data.length),
        });
      }
    });
  }

  copy() {
    const { param, toast } = this.state;
    this.setState({
      toast: { ...toast, show: true, text: "Your Link was Copied" },
    });
    API.get(`product/detail/share-count/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.getshareCount();
      }
    });
  }

  getshareCount() {
    const { param, data, toast } = this.state;
    API.get(`product/detail/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.setState({
          data: {
            ...data,
            share_count: result.data[0].share_count,
          },
          toast: { ...toast, show: false, text: "" },
        });
      }
    });
  }

  render() {
    const { data, contact, photo, related, param, toast } = this.state;
    const properties = {
      showArrows: true,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: false,
      showThumbs: true,
      useKeyboardArrows: true,
      autoPlay: false,
      stopOnHover: false,
      swipeable: false,
      dynamicHeight: true,
      emulateTouch: true,
      selectedItem: 0,
      interval: 0,
      transitionTime: 1000,
    };

    return (
      <main id="mt-main">
        {toast.show && <Toast text={toast.text} />}
        <section
          className="mt-product-detial wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mar-top-5">
                <div className="slide-container">
                  <Carousel {...properties}>
                    {photo.map((item) => (
                      <div
                        className="slide wow fadeInUp"
                        data-wow-delay="0.2s"
                        key={item.id}
                      >
                        <img
                          src={`${API.urlStorage}${item.photo_name}`}
                          alt="image descrption"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="col-md-6 mar-top-5">
                <div
                  className="wow fadeInRight detail-product-desc"
                  data-wow-delay="0.5s"
                >
                  <ul className="list-unstyled breadcrumbs">
                    <li>
                      <a href="/product">
                        Product <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                    <li>{data.product_name}</li>
                  </ul>

                  <h2>{data.product_name}</h2>

                  <ul className="list-unstyled list">
                    <li>
                      <CopyToClipboard
                        text={window.location.href}
                        onCopy={() => this.copy()}
                      >
                        <a
                          href="#"
                          id="modal-buttton"
                          data-toggle="modal"
                          data-target="#my-modal"
                        >
                          <i className="fa fa-share-alt"></i>
                          {data.share_count}
                        </a>
                      </CopyToClipboard>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-eye"></i>
                        {data.seen_count}
                      </a>
                    </li>
                  </ul>
                  <div
                    className="product-detail-desc"
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />
                  <div className="product-form">
                    {/* <div className="row-val">
                      <a id="newsletter-hiddenlink" href="#popup">
                        <button type="button">EMAIL</button>
                      </a>
                    </div> */}
                    <div className="row-val">
                      <a id="" href="#">
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          EMAIL
                        </button>
                      </a>
                    </div>
                    <div className="row-val">
                      <a
                        href={`https://wa.me/${
                          contact ? contact.phone : null
                        }?text=${window.location.href}%0a%0aAny Question`}
                        target="_blank"
                      >
                        <button>WHATSAPP</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">
                  <b>{data.product_name}</b>
                </h4>
              </div>
              <div className="modal-body">
                <div className="detial-holder">
                  <h2 className="text-center question-modal">
                    <b>Any Question Product?</b>
                  </h2>
                  {photo.map((item, index) => {
                    const order = [0];
                    return order.includes(index) ? (
                      <div
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                        key={item.id}
                      >
                        <img
                          src={`${API.urlStorage}/${item.photo_name}`}
                          alt="image descrption"
                          className="img-responsive img-modal"
                        />
                      </div>
                    ) : null;
                  })}
                  <div className="product-comment">
                    <form action="#" className="p-commentform">
                      <fieldset>
                        <div className="mt-row center">
                          <label>Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mt-row">
                          <label>E-Mail</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mt-row">
                          <label>Message</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-type1 btn-modal-email">
                  <b>SEND EMAIL</b>
                </button>
                <button
                  type="button"
                  className="btn-type1"
                  data-dismiss="modal"
                >
                  <b>CLOSE</b>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="popup-holder">
          <div id="popup" className="lightbox">
            <section className="mt-product-detial">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="slider">
                      <ul className="list-unstyled comment-list"></ul>
                      <div className="product-slider">
                        <div className="slide">
                          {photo.map((item, index) => {
                            const order = [0];
                            return order.includes(index) ? (
                              <div
                                className="slide wow fadeInUp"
                                data-wow-delay="0.2s"
                                key={item.id}
                              >
                                <img
                                  src={`${API.urlStorage}/${item.photo_name}`}
                                  alt="image descrption"
                                />
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="detial-holder">
                      <h2>{data.product_name}</h2>
                      <div className="product-comment">
                        <form action="#" className="p-commentform">
                          <fieldset>
                            <div className="mt-row">
                              <label>Name</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="mt-row">
                              <label>E-Mail</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="mt-row">
                              <label>Message</label>
                              <textarea className="form-control"></textarea>
                            </div>
                            <button
                              type="button"
                              id="submit"
                              className="btn-type1"
                            >
                              <b>SEND EMAIL</b>
                            </button>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}

        {/* <br /> */}
        {/* <ModalSendEmail
          product_id={param.product}
          photo_name={photo.map((item, index) => {
            const order = [0];
            return order.includes(index) ? item.photo_name : null;
          })}
        /> */}
        <br />

        <div className="related-products wow fadeInUp" data-wow-delay="0.5s">
          <div className="container">
            <h2>RELATED PRODUCTS</h2>
            <div className="row">
              {related.map((item) => (
                <div
                  className="col-md-3 col-sm-6 flex mar-top-2-related text-center wow fadeInUp image-zoom"
                  data-wow-delay="0.2s"
                  key={item.id}
                >
                  <div className="box">
                    <a href={`/product/detail?product=${item.id}`}>
                      <img
                        className="bg-grey img-responsive"
                        src={`${API.urlStorage}${item.photo_name}`}
                        alt="image description"
                      />
                    </a>
                  </div>
                  <div className="mar-top-1">
                    <strong className="title-product">
                      <a href={`/product/detail?product=${item.id}`}>
                        {item.product_name}
                      </a>
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
