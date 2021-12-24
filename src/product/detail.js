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
      openModal: false,
    };
  }

  componentDidMount() {
    const param = this.state.param;

    API.get(`product/detail/${param.product}`).then((result) => {
      this.setState({
        data: result.data[0],
        photo: result.data[0].photo,
      });
    });

    API.get(`product/related/${param.category}`).then((result) => {
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
    console.log("masuk sini");
  }

  render() {
    const { data, photo, related, openModal } = this.state;
    return (
      <main id="mt-main">
        <ModalSendEmail
          open={openModal}
          data={data}
          onHide={() => this.setState({ openModal: false })}
          onSend={() => this.sendMail}
        />
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
                        <div className="slide" key={item.id}>
                          <img
                            src={`${API.urlStorage}/${item.photo_name}`}
                            alt="image descrption"
                          />
                        </div>
                      ))}
                    </Slide>
                  </div>
                </div>

                <div className="detial-holder">
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
                        <i class="fa fa-eye"></i>
                        {data.seen_count}
                      </a>
                    </li>
                  </ul>
                  <div
                    className="txt-wrap"
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />
                  <form action="#" class="product-form">
                    <button
                      onClick={() => this.setState({ openModal: true })}
                      type="button"
                    >
                      Ask Question
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <div className="related-products wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mar-top-3">
                <h2>RELATED PRODUCTS</h2>
                <br />
                <div className="row">
                  <div className="col-xs-12 mar-top-1">
                    {related.map((item) => (
                      <div className="mt-product1">
                        <div className="box">
                          <a
                            href={`/product/detail?product=${item.id}&category=${this.state.param.category}`}
                          >
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div className="txt">
                          <strong className="title">
                            <a
                              href={`/product/detail?product=${item.id}&category=${this.state.param.category}`}
                            >
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
