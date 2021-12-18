import React from "react";
import img from "../assets/images/demo/img07.jpg";
import API from "../services";
import { Slide } from "react-slideshow-image";

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
    API.get(`product/related/${param.product}`).then((result) => {
      this.setState({
        related: result.data,
      });
    });
  }

  render() {
    const { data, photo, related } = this.state;
    return (
      <main id="mt-main">
        <section
          className="mt-product-detial wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="slider">
                  <ul className="list-unstyled comment-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-share-alt"></i>
                        {data.share_count}
                      </a>
                    </li>
                  </ul>

                  <div className="slide-container">
                    {photo.map((item) => (
                      <Slide>
                        <div className="slide">
                          <img
                            src={`${API.urlStorage}/${item.photo_name}`}
                            alt="image descrption"
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={`${API.urlStorage}/${item.photo_name}`}
                            alt="image descrption"
                          />
                        </div>
                        <div className="slide">
                          <img
                            src={`${API.urlStorage}/${item.photo_name}`}
                            alt="image descrption"
                          />
                        </div>
                      </Slide>
                    ))}
                  </div>
                </div>

                <div className="detial-holder">
                  <ul className="list-unstyled breadcrumbs">
                    <li>
                      <a href="#">
                        Product <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                    <li>{data.product_name}</li>
                  </ul>

                  <h2>{data.product_name}</h2>

                  <ul className="list-unstyled list">
                    <li>
                      <a href="#">
                        <i className="fa fa-share-alt"></i>SHARE
                      </a>
                    </li>
                  </ul>
                  <div
                    className="txt-wrap"
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="related-products wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>RELATED PRODUCTS</h2>
                <div className="row">
                  <div className="col-xs-12">
                    {related.map((item) => (
                      <div className="mt-product1 mt-paddingbottom20">
                        <div className="box">
                          <div className="b1">
                            <div className="b2">
                              <a href="product-detail.html">
                                <img
                                  src={`${API.urlStorage}/${item.photo_name}`}
                                  alt="image description"
                                />
                              </a>

                              <ul className="links">
                                <li>
                                  <a
                                    href={`/product/detail?product=${item.id}`}
                                  >
                                    <i className="icomoon icon-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="txt">
                          <strong className="title">
                            <a href="product-detail.html">
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
