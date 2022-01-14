import React from "react";
import API from "../services";
import ModalSendEmail from "./modal/SendEmailProductModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toast from "../component/Toast";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
    const { data, photo, related, param, copied} = this.state;
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
      transitionTime: 2000,      
    };

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
                  <div className="product-detail-desc"                   
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <ModalSendEmail 
          product_id={param.product} 
          photo_name={photo.map((item, index) => {
            const order = [0];
            return order.includes(index) ? item.photo_name : null;
          })}
          />
        <br />

        <div className="related-products wow fadeInUp reduce-margin" data-wow-delay="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mar-top-3">
                <h2>RELATED PRODUCTS</h2>
                <br />
                <div className="row">
                  <div className="col-xs-12 mar-top-1">
                    {related.map((item) => (
                      <div
                        className="mt-product1 text-center wow fadeInUp image-zoom"
                        data-wow-delay="0.2s"
                        key={item.id}
                      >
                        <div className="box">
                          <a href={`/product/detail?product=${item.id}`}>
                            <img
                              src={`${API.urlStorage}${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div>
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
