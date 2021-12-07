import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img07.jpg";
import img2 from "../assets/images/demo/img12.jpg";
import img3 from "../assets/images/demo/img13.jpg";
import API from "../services";
// import "../assets/css/main.css";

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
                        <div className="s-holder" key={promoHead.id}>
                          <img src={API.urlStorage+promoHead.photo_name}/>
                          <div className="s-box">
                           
                          </div>
                        </div>
                      )
                    })}

                    {/* <div class="s-holder">
                     <img src={img} />
                     <div class="s-box">
                       <strong class="s-title">FURNITURE DESIGNS IDEAS</strong>
                       <span class="heading">Upholstered fabric</span>
                       <span class="heading add">Counter stool</span>
                       <div class="s-txt">
                         <p>
                           Consectetur adipisicing elit. Beatae accusamus,
                           optio, repellendus inventore
                         </p>
                       </div>
                     </div>
                    </div>

                    <div class="s-holder">
                     <img src={img} />
                     <div class="s-box">
                       <strong class="s-title">FURNITURE DESIGNS IDEAS</strong>
                       <span class="heading">Upholstered fabric</span>
                       <span class="heading add">Counter stool</span>
                       <div class="s-txt">
                         <p>
                           Consectetur adipisicing elit. Beatae accusamus,
                           optio, repellendus inventore
                         </p>
                       </div>
                     </div>
                    </div> */}

                    {/*<div class="s-holder">*/}
                    {/*  <img src={img} />*/}
                    {/*  <div class="s-box">*/}
                    {/*    <strong class="s-title">KITCHEN ACCESSORIES</strong>*/}
                    {/*    <span class="heading">Wooden chopping board</span>*/}
                    {/*    <span class="heading add">Chopping Boards</span>*/}
                    {/*    <div class="s-txt">*/}
                    {/*      <p>*/}
                    {/*        Remo is a cutting board in solid oak wood, with an*/}
                    {/*        explicit reference to the oars of the boats.*/}
                    {/*      </p>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>

                <div
                  className="banner-box third wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  { this.state.promo.map((promo, index) => {
                    const order = [0,1];
                    return order.includes(index) ? (
                      <div
                        className="banner-12 right white wow fadeInUp"
                        data-wow-delay="0.4s"
                        key={promo.id}
                      >
                        <img src={API.urlStorage+promo.photo_name}/>
                        {/* <div className="holder">
                          <h2>
                            <span>Chairs</span>
                            <strong>ZIO DINING CHAIR</strong>
                          </h2>
                          <a className="btn-shop" href="product-detail.html">
                            <span>SHOP NOW</span>
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div> */}
                      </div>
                    ):null;
                  })}
                  {/*<div*/}
                  {/*  class="banner-12 right white wow fadeInUp"*/}
                  {/*  data-wow-delay="0.4s"*/}
                  {/*>*/}
                  {/*  <img src={img2} />*/}
                  {/*  <div class="holder">*/}
                  {/*    <h2>*/}
                  {/*      <span>Chairs</span>*/}
                  {/*      <strong>ZIO DINING CHAIR</strong>*/}
                  {/*    </h2>*/}
                  {/*    <a class="btn-shop" href="product-detail.html">*/}
                  {/*      <span>SHOP NOW</span>*/}
                  {/*      <i class="fa fa-angle-right"></i>*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/*<div*/}
                  {/*  class="banner-13 right wow fadeInDown"*/}
                  {/*  data-wow-delay="0.4s"*/}
                  {/*>*/}
                  {/*  <img src={img3} />*/}
                  {/*  <div class="holder">*/}
                  {/*    <h2>*/}
                  {/*      <span>Accessories / Lighting</span>*/}
                  {/*      <strong>TOTEM FLOOR LAMP</strong>*/}
                  {/*    </h2>*/}
                  {/*    <a class="btn-shop" href="product-detail.html">*/}
                  {/*      <span>SHOP NOW</span>*/}
                  {/*      <i class="fa fa-angle-right"></i>*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>

              <div
                className="banner-frame nospace wow fadeInUp"
                data-wow-delay="0.4s"
              >
                { this.state.promo.map((promo, index) => {
                  const order = [2,3,4];
                  return order.includes(index) ? (
                    <div
                      className="banner-9 right white wow fadeInUp"
                      data-wow-delay="0.4s"
                      key={promo.id}
                    >
                      <img src={API.urlStorage + promo.photo_name}/>
                      {/* <div className="holder">
                        <h2>
                          <span>Chairs</span>
                          <strong>ZIO DINING CHAIR</strong>
                        </h2>
                        <a className="btn-shop" href="product-detail.html">
                          <span>SHOP NOW</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div> */}
                    </div>
                  ) : null;
                })}

                {/*<div className="banner-9">*/}
                {/*  <img src={img} />*/}
                {/*  <div className="holder">*/}
                {/*    <h2>*/}
                {/*      <span>Wall Decor</span>*/}
                {/*      <strong>CLOCKs</strong>*/}
                {/*    </h2>*/}
                {/*    <a href="product-detail.html" className="btn-shop">*/}
                {/*      <span>VIEW</span>*/}
                {/*      <i className="fa fa-angle-right"></i>*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*</div>*/}

                {/*<div className="banner-10">*/}
                {/*  <img src={img} />*/}
                {/*  <div className="holder">*/}
                {/*    <h2>*/}
                {/*      <span>Coffee Tables</span>*/}
                {/*      <strong>S.O.S. BLOCKS</strong>*/}
                {/*    </h2>*/}
                {/*    <a href="product-detail.html" className="btn-shop">*/}
                {/*      <span>VIEW</span>*/}
                {/*      <i className="fa fa-angle-right"></i>*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*</div>*/}

                {/*<div className="banner-11">*/}
                {/*  <img src={img} />*/}
                {/*  <div className="holder">*/}
                {/*    <h2>*/}
                {/*      <span>Floor Lamps</span>*/}
                {/*      <strong>ROCKING LAMP</strong>*/}
                {/*    </h2>*/}
                {/*    <a href="product-detail.html" className="btn-shop">*/}
                {/*      <span>VIEW</span>*/}
                {/*      <i className="fa fa-angle-right"></i>*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              {/* <div
                class="mt-producttabs style5 wow fadeInUp"
                data-wow-delay="0.4s"
              ></div> */}
              <br />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
