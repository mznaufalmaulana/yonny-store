import React from "react";
import API from "../services";

class Index extends React.Component {
  state ={
    promoHeadline: [],
    promo: [],
  }

  componentDidMount() {
    API.get('promo/headline/list').then((result) => {
      if (result.message === "success") {
        this.setState({ promoHeadline: result.data });
      }
    });

    API.get('promo/list').then((result) => {
      if (result.message === "success") {
        this.setState({ promo: result.data });
      }
    });
  }

  render() {
    return (
      <main id="mt-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                className="banner-frame mt-paddingsmzero wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div
                  className="slider-7 mt-paddingbottomsm wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <div className="slider banner-slider">
                    { this.state.promoHeadline.map(promoHead => {
                      return(
                        <a href={promoHead.link}>
                          <div className="s-holder" key={promoHead.id}>
                            <img src={API.urlStorage+promoHead.photo_name}/>
                            <div className="s-box">                           
                            </div>
                          </div>
                        </a>
                      )
                    })}                    
                  </div>
                </div>

                <div
                  className="banner-box third wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  { this.state.promo.map((promo, index) => {
                    const order = [0,1];
                    return order.includes(index) ? (                      
                      <a href={promo.link}>
                        <div
                          className="banner-12 right white wow fadeInUp"
                          data-wow-delay="0.4s"
                          key={promo.id}
                        >
                          <img src={API.urlStorage+promo.photo_name}/>                    
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
                { this.state.promo.map((promo, index) => {
                  const order = [2,3,4];
                  return order.includes(index) ? (
                    <a href={promo.link}>
                      <div
                        className="banner-9 right white wow fadeInUp"
                        data-wow-delay="0.4s"
                        key={promo.id}
                      >
                        <img src={API.urlStorage + promo.photo_name}/>                     
                      </div>
                    </a>
                  ) : null;
                })}
              </div>             
              <br />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
