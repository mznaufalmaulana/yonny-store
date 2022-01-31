import React from "react";
import logo from "../assets/images/logo-yonny.png";
import API from "../services";
import SocialMedia from "./footer/SocialMedia";
import Categories from "./footer/Categories";
import Toast from "../component/Toast";

class Footer extends React.Component {
  state = {
    media: [],
    categoriesParent: [],
    contact: "",
    subscribeEmail: {
      emailAddress: null,
    },
    alert: {
      greetings: "",
      message: "",
      status: "",
      show: false,
    },
  };

  componentDidMount() {
    API.get("social-media/list").then((result) => {
      if (result.message === "success") {
        this.setState({ media: result.data });
      }
    });

    API.get("product-category/list-parent").then((result) => {
      if (result.message === "success") {
        this.setState({ categoriesParent: result.data });
      }
    });

    API.get("contact/onfooter").then((result) => {
      if (result.message === "success") {
        this.setState({ contact: result.data[0] });
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      subscribeEmail: {
        emailAddress: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let payload = new FormData();
    payload.append("_method", "POST");
    payload.append("email_address", this.state.subscribeEmail.emailAddress);
    API.post("email/subscribe", payload).then((result) => {
      if (result.message === "success") {
        this.setState({
          alert: {
            show: true,
            status: "success",
            greetings: "Congratulations!",
            message: "You were subscribed",
          },
        });
      } else {
        this.setState({
          alert: {
            show: true,
            status: "danger",
            greetings: "Sorry!",
            message: result.data,
          },
        });
      }
    });
    setTimeout(
      function () {
        this.setState({
          alert: {
            show: false,
            status: "",
            greetings: "",
            message: "",
          },
        });
      }.bind(this),
      5000
    );
  };

  render() {
    const { contact, alert } = this.state;
    return (
      <>
        <footer
          id="mt-footer"
          className="style7 wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {alert.show && <Toast text={alert.message} />}
          <div className="footer-holder bg-grey">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-4 mt-paddingbottomsm">
                  <div className="f-widget-about">
                    <a href="/">
                      <img
                        src={logo}
                        className="footer-logo"
                        width="10px"
                        alt="batuYonny"
                      />
                    </a>
                    <ul className="list-unstyled address-list">
                      <li>
                        <i className="fa fa-map-marker"></i>
                        <address>
                          {contact ? contact.first_address : null}
                          <br />
                          {contact ? contact.second_address : null}
                        </address>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>
                        <a href={`tel:${contact ? contact.phone : null}`}>
                          {contact ? contact.phone : null}
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>
                        <a href={`mailto:${contact ? contact.email : null}`}>
                          {contact ? contact.email : null}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="col-xs-12 col-sm-8 col-md-5 mt-paddingbottomsm">
                  <Categories categories={this.state.categoriesParent} />
                  <div className="nav-widget-1">
                    <h3 className="f-widget-heading">Information</h3>
                    <ul className="list-unstyled f-widget-nav">
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                      {/* <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li> */}
                    </ul>
                  </div>
                </nav>
                <div className="col-xs-12 col-md-3 text-right hidden-sm">
                  <div className="f-widget-newsletter">
                    <h3 className="f-widget-heading">Sing Up Newsletter</h3>
                    <p>
                      Subscribe to get news update <br />
                      on latest product
                    </p>
                    <div className="holder">
                      <form
                        className="newsletter-form"
                        onSubmit={this.handleSubmit}
                      >
                        <fieldset>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                          <button type="submit">
                            <i className="fa fa-angle-right"></i>
                          </button>
                        </fieldset>
                      </form>
                    </div>
                    <SocialMedia socialMedias={this.state.media} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>
                    © <a href="index.html">BATUYONNY</a> - All rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
