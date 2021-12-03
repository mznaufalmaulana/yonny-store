import React from "react";
import logo from "../assets/images/mt-logo.png";
// import { useEffect, useState } from "react";
// import API from "../services";
// import "../assets/css/main.css";

class Footer extends React.Component {
  render() { 
    return (
      <>
        <footer
          id="mt-footer"
          class="style7 wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div class="footer-holder bg-grey">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-4 mt-paddingbottomsm">                  
                  <div class="f-widget-about">       
                    <a href="index.html">                      
                      {/* <img src={logo} alt="batuYonny" /> */}
                    </a>
                    <p>Exercitation ullamco laboris nisi ut aliquip ex<br/> commodo consequat. Duis aute irure </p>
                    <ul class="list-unstyled address-list">
                      <li><i class="fa fa-map-marker"></i><address>Connaugt Road Central Suite 18B, 148 <br/>New Yankee</address></li>
                      <li><i class="fa fa-phone"></i><a href="tel:15553332211">+1 (555) 333 22 11</a></li>
                      <li><i class="fa fa-envelope-o"></i><a href="#">batuYonny@mail.com</a></li>
                    </ul>
                  </div>                  
                </div>
                <nav class="col-xs-12 col-sm-8 col-md-5 mt-paddingbottomsm">                  
                  <div class="nav-widget-1">
                    <h3 class="f-widget-heading">Categories</h3>
                    <ul class="list-unstyled f-widget-nav">
                      <li><a href="#">Chairs</a></li>
                      <li><a href="#">Sofas</a></li>
                      <li><a href="#">Living</a></li>
                      <li><a href="#">Bedroom</a></li>
                      <li><a href="#">Tables</a></li>
                      <li><a href="#">New</a></li>
                    </ul>
                  </div>           
                  <div class="nav-widget-1">
                    <h3 class="f-widget-heading">Information</h3>
                    <ul class="list-unstyled f-widget-nav">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Customer Service</a></li>
                      <li><a href="#">FAQs</a></li>
                    </ul>
                  </div>       
                </nav>
                <div class="col-xs-12 col-md-3 text-right hidden-sm">                  
                  <div class="f-widget-newsletter">
                    <h3 class="f-widget-heading">Sing Up Newsletter</h3>
                    <p>Subscribe now to get news update <br/>on any product</p>
                    <div class="holder">                      
                      <form action="#" class="newsletter-form">
                        <fieldset>
                          <input type="email" placeholder="Your Email" class="form-control" />
                          <button type="submit"><i class="fa fa-angle-right"></i></button>
                        </fieldset>
                      </form>                      
                    </div>
                    <h4 class="f-widget-heading follow">Follow Us</h4>                    
                    <ul class="list-unstyled social-network">
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                    </ul>                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-area">
					  <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-6">
                  <p>© <a href="index.html">BATUYONNY</a> - All rights Reserved</p>
                </div>
                {/* <div class="col-xs-12 col-sm-6 text-right">							
                </div> */}
              </div>
            </div>
          </div>
      
        </footer>
      </>
    );
  }
}

export default Footer;
