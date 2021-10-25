import React from "react";
import logo from "../assets/images/mt-logo.png";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Flags from "country-flag-icons/react/1x1";

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
                        <a href="#">
                          <i class="fa fa-whatsapp" aria-hidden="true"></i>
                          &nbsp; +62 82 123 123 123
                        </a>
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
                            <a href="#">
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
                                      <a
                                        href="product-grid-view.html"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Living Room
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="product-grid-view.html">
                                              Accessories
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">TV Stands</a>
                                          </li>
                                          <li>
                                            <a href="#">Console Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">Coffee Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">Side Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">Mirrors</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Dining Room
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="#">Accessoriese</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Dining Tables and Chairs
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Bedroom
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="#">Lamps</a>
                                          </li>
                                          <li>
                                            <a href="#">Bedside Tables</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Garden
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="#">Pots</a>
                                          </li>
                                          <li>
                                            <a href="#">Garden Lamps</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Garden Tables and Chairs
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Water Feature</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Bathroom
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="#">Accessories</a>
                                          </li>
                                          <li>
                                            <a href="#">Bathtubs</a>
                                          </li>
                                          <li>
                                            <a href="#">Wash Basins</a>
                                          </li>
                                          <li>
                                            <a href="#">Free-Standing Basins</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Mosaic
                                        </strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Statue
                                        </strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">Slab</strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a href="#" className="mt-subopener">
                                        <strong className="title">
                                          Collection
                                        </strong>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <span className="mt-mdropover"></span>
                          </li>

                          <li>
                            <a href="about-us.html">PROJECTS</a>
                          </li>
                          <li>
                            <a href="about-us.html">ABOUT</a>
                          </li>
                          <li>
                            <a href="about-us.html">CONTACT</a>
                          </li>

                          <li>
                            <a class="drop-link" href="#">
                              {getUnicodeFlagIcon("GB")} &nbsp;
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <div class="s-drop">
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
