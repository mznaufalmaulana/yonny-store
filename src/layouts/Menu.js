import React from "react";
import logo from "../assets/images/mt-logo.png";
// import "../assets/css/main.css";

class Menu extends React.Component {
  render() {
    return (
      <>
        <header className="style5" id="mt-header">
          <div className="mt-bottom-bar">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="mt-logo">
                    <a href="#">
                      {/* <img alt="schon" src="images/mt-logo.png"> */}
                      <img src={logo} />
                    </a>
                  </div>

                  <div className="mt-nav-box">
                    <ul className="mt-top-list hidden-sm hidden-xs">
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                    </ul>

                    <div className="mt-holder">
                      <nav id="nav">
                        <ul>
                          <li>
                            <a className="drop-link" href="homepage1.html">
                              HOME
                            </a>
                          </li>

                          <li className="drop">
                            <a href="product-grid-view.html">
                              PRODUCTS &nbsp;
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>

                            <div className="mt-dropmenu text-left">
                              <div className="mt-frame">
                                <div className="mt-f-box">
                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a
                                          href="product-grid-view.html"
                                          className="mt-subopener"
                                        >
                                          PRODUCTS
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="product-grid-view.html">
                                              Product Grid View
                                            </a>
                                          </li>
                                          <li>
                                            <a href="product-list-view.html">
                                              Product List View
                                            </a>
                                          </li>
                                          <li>
                                            <a href="product-detail.html">
                                              Product Detail
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a href="#" className="mt-subopener">
                                          404 Pages
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="404-page.html">404 Page</a>
                                          </li>
                                          <li>
                                            <a href="404-page2.html">
                                              404 Page2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a href="#" className="mt-subopener">
                                          About US
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="about-us.html">About</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a href="#" className="mt-subopener">
                                          Contact US
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="contact-us.html">
                                              Contact
                                            </a>
                                          </li>
                                          <li>
                                            <a href="contact-us2.html">
                                              Contact 2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a href="#" className="mt-subopener">
                                          Coming Soon
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="coming-soon.html">
                                              Coming Soon
                                            </a>
                                          </li>
                                          <li>
                                            <a href="coming-soon2.html">
                                              Coming Soon2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <strong className="title">
                                        <a href="#" className="mt-subopener">
                                          KITCHEN FURNITURE
                                        </a>
                                      </strong>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="#">Kitchen Taps</a>
                                          </li>
                                          <li>
                                            <a href="#">Breakfast time</a>
                                          </li>
                                          <li>
                                            <a href="#">Cooking</a>
                                          </li>
                                          <li>
                                            <a href="#">Food Storage Boxes</a>
                                          </li>
                                          <li>
                                            <a href="#">Spice Jars</a>
                                          </li>
                                          <li>
                                            <a href="#">Napskins</a>
                                          </li>
                                          <li>
                                            <a href="#">Oven Gloves</a>
                                          </li>
                                          <li>
                                            <a href="#">Placemats</a>
                                          </li>
                                          <li>
                                            <a href="#">Cooking</a>
                                          </li>
                                          <li>
                                            <a href="#">Food Storage Boxes</a>
                                          </li>
                                          <li>
                                            <a href="#">Spice Jars</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <span className="mt-mdropover"></span>
                          </li>

                          <li>
                            <a href="about-us.html">ABOUT</a>
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
