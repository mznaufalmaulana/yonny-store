import React, { Component } from "react";
import logo from "../assets/images/logo-yonny.png";
import API from "../services";
import SocialMedia from "./footer/SocialMedia";
import Categories from "./footer/Categories";

class Footer extends React.Component {
  state = {
    media: [],
    categoriesParent: [],
    contact: "",
    subscribeEmail: {
      emailAddress : null
    },    
  }

  componentDidMount() {
    API.get('social-media/list').then((result) => {
      if (result.message === "success") {
        this.setState({ media: result.data });
      }
    });

    API.get('product-category/list-parent').then((result) => {
      if (result.message === "success") {
        this.setState({ categoriesParent: result.data });
      }
    });

    API.get('contact/onfooter').then((result) => {
      if (result.message === "success") {
        this.setState({ contact: result.data[0] });
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      subscribeEmail: {
        emailAddress: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let payload = new FormData();
    payload.append("_method", 'POST');
    payload.append("email_address", this.state.subscribeEmail.emailAddress);
    API.post('email/subscribe', payload).then((result) => {
      if (result.message === "success") {
        console.log(result.message)
      }
    });    
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
    // console.log(prevProps, prevState);
  }

  render() {
    const { contact } = this.state;    
    return (
      <>
        <footer
          id="mt-footer"
          className="style7 wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="footer-holder bg-grey">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-4 mt-paddingbottomsm">                  
                  <div className="f-widget-about">       
                    <a href="/">                      
                      <img src={logo} className="footer-logo" width="10px" alt="batuYonny" />
                    </a>                    
                    <ul className="list-unstyled address-list">
                      {/* <li><i className="fa fa-map-marker"></i><address>Connaugt Road Central Suite 18B, 148 <br/>New Yankee</address></li> */}
                      <li><i className="fa fa-map-marker"></i><address>{contact.address}</address></li>
                      <li><i className="fa fa-phone"></i><a href={`tel:+62${contact.phone}`}>+62{contact.phone}</a></li>
                      <li><i className="fa fa-envelope-o"></i><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                    </ul>
                  </div>                  
                </div>
                <nav className="col-xs-12 col-sm-8 col-md-5 mt-paddingbottomsm">
                  <Categories categories={this.state.categoriesParent} />
                  <div className="nav-widget-1">
                    <h3 className="f-widget-heading">Information</h3>
                    <ul className="list-unstyled f-widget-nav">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>       
                </nav>
                <div className="col-xs-12 col-md-3 text-right hidden-sm">                  
                  <div className="f-widget-newsletter">
                    <h3 className="f-widget-heading">Sing Up Newsletter</h3>
                    <p>Subscribe now to get news update <br/>on any product</p>
                    <div className="holder">                      
                      <form className="newsletter-form" onSubmit={ this.handleSubmit }>
                        <fieldset>
                          <input type="email" placeholder="Your Email" className="form-control" onChange={this.handleChange}/>
                          <button type="submit"><i className="fa fa-angle-right"></i></button>
                        </fieldset>
                      </form>                      
                    </div>
                    <SocialMedia socialMedias={this.state.media}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>© <a href="index.html">BATUYONNY</a> - All rights Reserved</p>
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
