import React from "react";
import { Slide, Fade } from "react-slideshow-image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
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
    const properties = {
      duration: 3000,
      canSwipe: true,
      indicators: false,
    };

    return (
      <main id="mt-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                className="banner-frame mt-paddingsmzero"
              >
                <div
                  className="slider-7 mt-paddingbottomsm" data-wow-delay="0.4s"
                >
                  <div className="slide-container">                    
                     <Slide {...properties}>
                      { this.state.promoHeadline.map(promoHead => (                        
                        <a href={promoHead.link}>
                          <div className="s-holder wow fadeInLeft each-fade" data-wow-delay="0.4s" key={promoHead.id}>
                            <img src={`${API.urlStorage}${promoHead.photo_name}`}/>                            
                          </div>
                        </a>                      
                      ))}
                    </Slide>                    
                  </div>
                </div>

                <div
                  className="banner-box third"
                  data-wow-delay="0.4s"
                >
                  { this.state.promo.map((promo, index) => {
                    const order = [0,1];
                    return order.includes(index) ? (                      
                      <a href={promo.link}>
                        <div
                          className={`banner-${12+index} right white wow fadeInRight`}
                          data-wow-delay="0.4s"
                          key={promo.id}
                        >
                          <img src={`${API.urlStorage}${promo.photo_name}`}/>                    
                        </div>
                      </a>
                    ):null;
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
                        className={`banner-${7+index} right white wow fadeInUp`}
                        data-wow-delay="0.4s"
                        key={promo.id}
                      >
                        <img src={`${API.urlStorage}${promo.photo_name}`}/>                     
                      </div>
                    </a>
                  ) : null;
                })}
              </div>             
              <br /><br />
              <br />        
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
