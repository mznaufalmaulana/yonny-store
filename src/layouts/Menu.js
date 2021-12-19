import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-yonny.png";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import API from "../services";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: [],
    };
    this.renderMenu = this.renderMenu.bind(this);
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
            this.setState(
              {
                productCategory: [...this.state.productCategory, list],
              },
              function () {
                // this.renderMenu();
              }
            );
            list = [];
            seq = 0;
          }
        }
      }
    });
  }

  renderMenu() {
    const { productCategory } = this.state;
    let html = [];
    for (let i = 0; i < productCategory.length; i++) {
      for (let j = 0; j < productCategory[i].length; j++) {
        console.log(productCategory[i][j]);
      }
      html.push(<div className="mt-col-3"></div>);
    }
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
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                          &nbsp; +62 82 123 123 123
                        </a>
                      </li>
                    </ul>

                    <div className="mt-holder">
                      <nav id="nav">
                        <ul>
                          <li>
                            {/*<Link to="/">HOME</Link>*/}
                            <a href="/">HOME</a>
                          </li>

                          <li className="drop">
                            <Link to="/product">
                              PRODUCTS &nbsp;
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </Link>

                            <div className="mt-dropmenu text-left">
                              <div className="mt-frame">
                                <div className="mt-f-box">
                                  {this.state.productCategory.map(
                                    (val, idx) => (
                                      <div className="mt-col-3" key={idx}>
                                        {val.map((item, index) =>
                                          // console.log(item)
                                          item.child ? (
                                            <div className="sub-dropcont">
                                              {console.log(item)}
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
                                                          href={`product?page=1&category=${item.id}`}
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
                                            <div className="sub-dropcont">
                                              <a
                                                href={`product?page=1&category=${item.id}`}
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
                                </div>
                              </div>
                            </div>

                            <span className="mt-mdropover"></span>
                          </li>

                          <li>
                            <Link to="/project">PROJECTS</Link>
                          </li>
                          <li>
                            <Link to="/about">ABOUT</Link>
                          </li>
                          <li>
                            <Link to="/contact">CONTACT</Link>
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
