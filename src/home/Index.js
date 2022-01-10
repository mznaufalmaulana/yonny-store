import React from "react";
// import { Slide, Fade } from "react-slideshow-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import API from "../services";

class Index extends React.Component {
  state = {
    promoHeadline: [],
    promo: [],
    latest: []
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

    API.get(`product/latest`).then((result) => {    
      if (result.message === "success") {        
        this.setState({ latest: result.data });
      }
    })
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
      interval: 10000,
      transitionTime: 2000,
    };

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    return (      
      <div>
        <div className="mt-main-slider">
          <div className="slider banner-slider">
            <Carousel {...properties}>
              {this.state.promoHeadline.map((promoHead) => (              
                <a href={promoHead.link} key={promoHead.id}>
                  <div
                    className="s-holder wow fadeInLeft each-fade"
                    data-wow-delay="0.4s"                    
                  >
                    <a href={promoHead.link}>
                      <img src={`${API.urlStorage}${promoHead.photo_name}`}/>
                    </a>
                  </div>
                </a>
                
              ))}
            </Carousel>            
          </div>
        </div>

        <main id="mt-main">
          <div className="container reduce-margin">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-frame">
                  { this.state.promo.map((promo, index) => {
                    const order = [0];
                    return order.includes(index) ? (                                           
                      <div className="banner-1 wow fadeInLeft image-zoom" data-wow-delay="0.4s" key={promo.id}>
                        <a href={promo.link}>
                          <img alt="image description" src={`${API.urlStorage}${promo.photo_name}`}/>                        
                        </a>
                      </div>   
                    ):null;
                  })}                                      
                  
                  <div className="banner-box first">   
                    { this.state.promo.map((promo, index) => {
                      const order = [1,2];
                      return order.includes(index) ? (                                           
                        <div className={`banner-${index+1} wow fadeInUp image-zoom`} data-wow-delay="0.4s" key={promo.id}>
                          <a href={promo.link}>
                            <img alt="image description" src={`${API.urlStorage}${promo.photo_name}`}/>                   
                          </a>
                        </div>   
                      ):null;
                    })}                                              
                  </div>                  
                  
                  { this.state.promo.map((promo, index) => {
                    const order = [3];
                    return order.includes(index) ? (                                           
                      <div className={`banner-${index+1} wow fadeInRight image-zoom`} data-wow-delay="0.4s" key={promo.id}>
                        <a href={promo.link}>
                          <img alt="image description" src={`${API.urlStorage}${promo.photo_name}`}/>                        
                        </a>
                      </div>   
                    ):null;
                  })}                              
                </div>                    
                <br /><br />       
              </div>
            </div>
          </div>
          {/* <div className="mt-bestseller text-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 mt-heading text-uppercase">
                  <h2 className="heading">Collection</h2>
                  <p>GREAT QUALITY PRODUCT</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="bestseller-slider wow fadeInUp" data-wow-delay="0.4s">                  
                    <MultiCarousel                                                       
                      ssr={true}                      
                      deviceType={this.props.deviceType}
                      itemClass="image-item"
                      responsive={responsive}
                    >
                      {this.state.latest.map((late) => (                    
                        <a href={`/product/detail?product=${late.id}`}>
                          <img 
                            draggable={false}
                            src={`${API.urlStorage}${late.photo_name}`}
                          />                         
                        </a>                      
                      ))}
                    </MultiCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>        
      </div>
    );
  }
}

export default Index;
