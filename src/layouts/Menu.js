import React from "react";
import logo from "../assets/images/logo-yonny.png";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import API from "../services";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: [],
      promo: [],
    };
  }

  componentDidMount() {
    API.get("menu/product-category").then((result) => {
      if (result.message === "success") {
        let list = [];
        let seq = 0;
        for (let i = 0; i < result.data.length; i++) {
          list.push(result.data[i]);
          seq++;
          if (seq === 3) {
            this.setState({
              productCategory: [...this.state.productCategory, list],
            });
            list = [];
            seq = 0;
          }
        }
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
      <>
        <header className="style5" id="mt-header">
          <div className="mt-bottom-bar mb-5">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="mt-logo">                    
                    <a href="/">
                      <img src={logo} width="10px" className="topbar-logo" />
                    </a>
                  </div>

                  <div className="mt-nav-box">
                    <ul className="mt-top-list hidden-sm hidden-xs">
                      <li>
                        <a href="https://wa.me/6282123123123" target="_blank">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                          &nbsp; +62 82 123 123 123
                        </a>
                      </li>
                    </ul>

                    <div className="mt-holder">
                      <nav id="nav">
                        <ul>
                          <li>
                            <a href="/">HOME</a>
                          </li>

                          <li className="drop">
                            <a href="/">
                              PRODUCTS &nbsp;
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>                            
                            <div className="mt-dropmenu text-left">
                              <div className="mt-frame">
                                <div className="mt-f-box">
                                  {this.state.productCategory.map(
                                    (val, idx) => (
                                      <div className="mt-col-3" key={idx}>
                                        {val.map((item, index) =>
                                          item.child ? (
                                            <div className="sub-dropcont" key={item.id}>                                              
                                              <a
                                                href={`product?page=1&category=${item.id}`}
                                                className="mt-subopener"
                                              >
                                                <strong className="title">
                                                  {item.category_name}
                                                </strong>
                                              </a>
                                              <div className="sub-drop">
                                                <ul>
                                                  {item.child.map((ch) => {
                                                    return (
                                                      <li key={ch.id}>
                                                        <a
                                                          href={`product?page=1&category=${ch.id}`}
                                                        >
                                                          {ch.category_name}
                                                        </a>
                                                      </li>
                                                    );
                                                  })}
                                                </ul>
                                              </div>
                                            </div>
                                          ) : (
                                            <div className="sub-dropcont" key={item.id}>
                                              <a
                                                href={`/product?page=1&category=${item.id}`}
                                                className="mt-subopener"
                                                key={index}
                                              >
                                                <strong className="title">
                                                  {item.category_name}
                                                </strong>
                                              </a>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )
                                  )}
                                  <div class="mt-col-3 promo">
                                    <div class="mt-promobox">
                                      { this.state.promo.map((promo, index) => {
                                        const order = [5];
                                        return order.includes(index) ? (                      
                                          <a href={promo.link} key={promo.id}>                                            
                                            <img src={API.urlStorage+promo.photo_name}/>                                                                
                                          </a>
                                        ):null;
                                      })}                                                       
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <span className="mt-mdropover"></span>
                          </li>

                          <li>                            
                            <a href="/project">PROJECTS</a>
                          </li>
                          <li>
                            <a href="/about">ABOUT</a>                            
                          </li>
                          <li>
                            <a href="/contact">CONTACT</a>                            
                          </li>

                          <li>
                            <a className="drop-link" href="#">
                              {getUnicodeFlagIcon("GB")} &nbsp;
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <div className="s-drop">
                              <ul>
                                <li>
                                  <a href="#">
                                    {getUnicodeFlagIcon("GB")}&nbsp;English
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {getUnicodeFlagIcon("ID")}&nbsp;Bahasa
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </nav>

                      <ul className="mt-icon-list">
                        <li className="hidden-lg hidden-md">
                          <a href="#" className="bar-opener mobile-toggle">
                            <span className="bar"></span>
                            <span className="bar small"></span>
                            <span className="bar"></span>
                          </a>
                        </li>
                        {/* <li>
                          <a className="icon-magnifier" href="#"></a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-search-popup">
          <div className="mt-holder">
            <a href="#" className="search-close">
              <span></span>
              <span></span>
            </a>
            <div className="mt-frame">
              <form action="#">
                <fieldset>
                  <span className="icon-microphone"></span>
                  <button className="icon-magnifier" type="submit"></button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
