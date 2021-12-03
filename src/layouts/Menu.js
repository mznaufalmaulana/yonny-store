import React from "react";
import logo from "../assets/images/logo-yonny.png";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

class Menu extends React.Component {
  render() {
    return (
      <>
        <header className="style5" id="mt-header">
          <div className="mt-bottom-bar mb-5">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="mt-logo">
                    {/* <NavLink to="/"> */}
                    <a href="/">
                      <img src={logo} width="10px" className="topbar-logo" />
                    </a>
                    {/* </NavLink> */}
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
                            <a href="/">HOME</a>
                          </li>

                          <li className="drop">
                            <a href="/product">
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
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Living Room
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="/product">Accessories</a>
                                          </li>
                                          <li>
                                            <a href="/product">TV Stands</a>
                                          </li>
                                          <li>
                                            <a href="/product">
                                              Console Tables
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/product">Coffee Tables</a>
                                          </li>
                                          <li>
                                            <a href="/product">Side Tables</a>
                                          </li>
                                          <li>
                                            <a href="/product">Mirrors</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Dining Room
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="/product">Accessoriese</a>
                                          </li>
                                          <li>
                                            <a href="/product">
                                              Dining Tables and Chairs
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Bedroom
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="/product">Lamps</a>
                                          </li>
                                          <li>
                                            <a href="/product">
                                              Bedside Tables
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Garden
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="/product">Pots</a>
                                          </li>
                                          <li>
                                            <a href="/product">Garden Lamps</a>
                                          </li>
                                          <li>
                                            <a href="/product">
                                              Garden Tables and Chairs
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/product">Water Feature</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Bathroom
                                        </strong>
                                      </a>
                                      <div className="sub-drop">
                                        <ul>
                                          <li>
                                            <a href="/product">Accessories</a>
                                          </li>
                                          <li>
                                            <a href="/product">Bathtubs</a>
                                          </li>
                                          <li>
                                            <a href="/product">Wash Basins</a>
                                          </li>
                                          <li>
                                            <a href="/product">
                                              Free-Standing Basins
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-col-3">
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Mosaic
                                        </strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">
                                          Statue
                                        </strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
                                        <strong className="title">Slab</strong>
                                      </a>
                                    </div>
                                    <div className="sub-dropcont">
                                      <a
                                        href="/product"
                                        className="mt-subopener"
                                      >
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
                            <a href="/project">PROJECTS</a>
                          </li>
                          <li>
                            <a href="/about">ABOUT</a>
                          </li>
                          <li>
                            <a href="/contact">CONTACT</a>
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
