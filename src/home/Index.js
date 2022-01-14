import React from "react";
// import { Slide, Fade } from "react-slideshow-image";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.css";
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import API from "../services";

class Index extends React.Component {
  state = {
    promoHeadline: [],
    promo: [],
    collection: []
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

    const settings = {
      dots: true,
      infinite: true,      
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],      
    };

    return (      
      <div>
        <div className="mar-top-2">          
            <Slider {...settings} >
              {this.state.promoHeadline.map((promoHead) => (                              
                <div
                  className="s-holder wow fadeInLeft each-fade"
                  data-wow-delay="0.4s"         
                  key={promoHead.id}           
                >
                  <a href={promoHead.link}>
                    <img src={`${API.urlStorage}${promoHead.photo_name}`}/>
                  </a>
                </div>                                
              ))}
            </Slider>                      
        </div>

        <main id="mt-main">
          <div className="container reduce-margin">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-frame pad-bot-1">
                  { this.state.promo.map((promo, index) => {
                    const order = [0];
                    return order.includes(index) ? (                                           
                      <div className="banner-1 wow fadeInLeft image-zoom-promo" data-wow-delay="0.4s" key={promo.id}>
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
                        <div className={`banner-${index+1} wow fadeInUp image-zoom-promo`} data-wow-delay="0.4s" key={promo.id}>
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
                      <div className={`banner-${index+1} wow fadeInRight image-zoom-promo`} data-wow-delay="0.4s" key={promo.id}>
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
          
          <div className="mt-bestseller text-center wow fadeInUp" data-wow-delay="0.4s">
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
                      <div className="image-zoom-collection collection-name wow fadeInUp" 
                        data-wow-delay="0.4s" 
                        key={collection.id}
                      >
                        <a href={`/product/detail?product=${collection.id}`}>
                          <img 
                            draggable={false}
                            src={`${API.urlStorage}${collection.photo_name}`}
                          />                                                   
                          <strong>                              
                            {collection.product_name}                              
                          </strong>                          
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
