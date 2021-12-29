import React from "react";
import API from "../services";
import { Slide } from "react-slideshow-image";
import ModalSendEmail from "./modal/SendEmailProductModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toast from "../component/Toast";

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
      },
      question: {
        name: "",
        email: "",
        message: "",
      },
      copied: false,
      openModal: false,
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

  copy() {
    const { param } = this.state;
    this.setState({ copied: true });
    API.get(`product/detail/share-count/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.getshareCount();
      }
    });
  }

  getshareCount() {
    const { param, data } = this.state;
    API.get(`product/detail/${param.product}`).then((result) => {
      if (result.message === "success") {
        this.setState({
          data: {
            ...data,
            share_count: result.data[0].share_count,
          },
          copied: false,
        });
      }
    });
  }

  render() {
    const { data, photo, related, param, copied } = this.state;
    return (
      <main id="mt-main">
        {copied && <Toast text="Your Link was Copied" />}
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
                    // className="txt-wrap"
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
      </main>
    );
  }
}

export default Detail;
