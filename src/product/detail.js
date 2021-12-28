import React from "react";
import API from "../services";
import { Slide } from "react-slideshow-image";
import ModalSendEmail from "./modal/SendEmailProductModal";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URLSearchParams(this.props.location.search);
    this.state = {
      data: "",
      photo: [],
      related: [],
      param: {
        product: this.url.get("product"),
        category: this.url.get("category"),
      },
      question: {
        name: "",
        email: "",
        message: "",
      },
      openModal: false,
    };
  }

  componentDidMount() {
    const param = this.state.param;

    API.get(`product/detail/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.setState({
          data: result.data[0],
          photo: result.data[0].photo,
        });
        this.realatedProduct(result.data[0].product_category[0].id);
      }
    });
  }

  realatedProduct(idCategory) {
    API.get(`product/related/${idCategory}`).then((result) => {
      if (result.data.length > 5) {
        this.setState({
          related: result.data.slice(0, 5),
        });
      } else {
        this.setState({
          related: result.data.slice(0, result.data.length),
        });
      }
    });
  }

  sendMail() {
    console.log(this.state.question);
  }

  render() {
    const { data, photo, related, openModal, question, param } = this.state;
    return (
      <main id="mt-main">
        <section
          className="mt-product-detial wow fadeInUp mb-5"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="slider">
                  <ul className="list-unstyled comment-list"></ul>
                  <div className="slide-container">
                    <Slide>
                      {photo.map((item) => (
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
                      ))}
                    </Slide>
                  </div>
                </div>

                <div
                  className="detial-holder wow fadeInRight"
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
                      <a
                        href="#"
                        id="modal-buttton"
                        data-toggle="modal"
                        data-target="#my-modal"
                      >
                        <i className="fa fa-share-alt"></i>
                        {data.share_count}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-eye"></i>
                        {data.seen_count}
                      </a>
                    </li>
                  </ul>
                  <div                    
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />
                  {/* <form action="#" className="product-form">
                    <a id="newsletter-hiddenlink" href="#popup">
                      <button type="button">Ask Question</button>
                    </a>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <ModalSendEmail product_id={param.product} />
        <br />

        <div className="related-products wow fadeInUp" data-wow-delay="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mar-top-3">
                <h2>RELATED PRODUCTS</h2>
                <br />
                <div className="row">
                  <div className="col-xs-12 mar-top-1">
                    {related.map((item) => (
                      <div
                        className="mt-product1 wow fadeInUp"
                        data-wow-delay="0.2s"
                        key={item.id}
                      >
                        <div className="box">
                          <a href={`/product/detail?product=${item.id}`}>
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div className="txt">
                          <strong className="title">
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
            </div>
          </div>
        </div>

        <div className="popup-holder">
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
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                  this.setState({
                                    question: {
                                      ...question,
                                      name: e.target.value,
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="mt-row">
                              <label>E-Mail</label>
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                  this.setState({
                                    question: {
                                      ...question,
                                      email: e.target.value,
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="mt-row">
                              <label>Message</label>
                              <textarea className="form-control"></textarea>
                            </div>                            
                            <button type="button" className="btn-type1"  onClick={() => this.sendMail()}>
                              SEND EMAIL
                            </button>
                          </fieldset>
                        </form>
                        {/* <a
                          href="#"
                          className="btn-type1"
                          onClick={() => this.sendMail()}
                        >
                          SEND EMAIL
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
