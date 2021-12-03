import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img07.jpg";
import img2 from "../assets/images/demo/img12.jpg";
import img3 from "../assets/images/demo/img13.jpg";
import Banner from "../component/Banner";
// import "../assets/css/main.css";

class Index extends React.Component {
  render() {
    return (
      <main id="mt-main">
        <Banner title="Contact" />        
        <section class="mt-contact-detail content-info wow fadeInUp" data-wow-delay="0.4s">
          <div class="container-fluid">           
            <div class="row">
              <div class="col-xs-12 col-sm-8">
                <div class="txt-wrap">
                  <h1>Lorem. chair maker</h1>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. </p>
                </div>
                <ul class="list-unstyled contact-txt">
                  <li>
                    <strong>Address</strong>
                    <address>Suite 18B, 148 Connaught Road <br/>Central <br/>New Yankee</address>
										<br/>
                    <address>Suite 18B, 148 Connaught Road <br/>Central <br/>New Yankee</address>
                  </li>
                  <li>
                    <strong>Phone</strong>
                    <a href="#">+1 (555) 333 22 11</a>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
                    <a href="#">+1 (555) 333 22 11</a>
                  </li>
                  <li>
                    <strong>E_mail</strong>
                    <a href="#">info@schon.chair</a>
										<br/>										
										<br/>
										<br/>
										<br/>
										<br/>
                    <a href="#">info@schon.chair</a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4">
                <h2>Have a question?</h2>
                <form action="#" class="contact-form">
                  <fieldset>
                    <input type="text" class="form-control" placeholder="Name"/>
                    <input type="email" class="form-control" placeholder="E-Mail"/>                    
                    <textarea class="form-control" placeholder="Message"></textarea>
                    <button class="btn-type3" type="submit">Send</button>
                  </fieldset>
                </form>                
              </div>
            </div>
          </div>
        </section>
      </main>
      
    );
  }
}

export default Index;
