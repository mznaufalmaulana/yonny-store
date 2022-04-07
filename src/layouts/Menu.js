import React from "react";
import logoText from "../assets/images/logoFixBY.png";
import API from "../services";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: [],
      promo: [],
      search: [],
      contact: "",
      redirect: true,
    };
    this.handleChange = this.handleChange.bind(this);
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

    API.get("promo/list").then((result) => {
      if (result.message === "success") {
        this.setState({ promo: result.data });
      }
    });

    API.get("contact/onfooter").then((result) => {
      if (result.message === "success") {
        this.setState({ contact: result.data[0] });
      }
    });
  }

  handleChange = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/product?page=1&search=${this.state.search}`;
    }
  };

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
                      <img src={logoText} className="topbar-logo" />
                    </a>
                  </div>

                  <div className="mt-nav-box">
                    <ul className="mt-top-list hidden-sm hidden-xs">
                      <li>
                        <a
                          className="whatsapp"
                          href={`https://wa.me/${
                            this.state.contact ? this.state.contact.phone : null
                          }`}
                          target="_blank"
                        >
                          <i
                            className="fa fa-whatsapp icon-size"
                            id="icon-size"
                            aria-hidden="true"
                          ></i>
                          &nbsp;{" "}
                          {this.state.contact ? this.state.contact.phone : null}
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
                            <a className="drop-color" href="/product?page=1">
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
                                            <div
                                              className="sub-dropcont"
                                              key={item.id}
                                            >
                                              <a
                                                href={`/product?page=1&category=${item.id}`}
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
                                                          href={`/product?page=1&category=${ch.id}`}
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
                                            <div
                                              className="sub-dropcont"
                                              key={item.id}
                                            >
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
                                        {idx === 2 && (
                                          <div className="sub-dropcont">
                                            <a
                                              href={`/product?page=1`}
                                              className="mt-subopener"
                                            >
                                              <strong className="title">
                                                All Categories
                                              </strong>
                                            </a>
                                          </div>
                                        )}
                                      </div>
                                    )
                                  )}
                                  <div className="mt-col-3 promo">
                                    <div className="mt-promobox">
                                      {this.state.promo.map((promo, index) => {
                                        const order = [4];
                                        return (
                                          order.includes(index) && (
                                            <a href={promo.link} key={promo.id}>
                                              <img
                                                src={
                                                  API.urlStorage +
                                                  promo.photo_name
                                                }
                                              />
                                            </a>
                                          )
                                        );
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
                        <li>
                          <a className="icon-magnifier" href="#"></a>
                        </li>
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
              <form onSubmit={(e) => this.handleChange(e)}>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) =>
                      this.setState({
                        search: e.target.value,
                      })
                    }
                    onKeyDown={(e) => this.handleChange(e)}
                  />
                  <button
                    className="icon-magnifier"
                    type="submit"
                    disabled
                  ></button>
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
