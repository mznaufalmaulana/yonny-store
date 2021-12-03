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
        <Banner title="About" />
        <section class="mt-about-sec wow fadeInUp" data-wow-delay="0.4s">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="txt">
                  <h2>OUR STORY</h2>
                  <p>Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <strong>Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.</strong></p>
                  <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at, </p>
                </div>
                <div class="mt-follow-holder">
                  <span class="title">Follow Us</span>                  
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
        </section>
        <section class="mt-workspace-sec wow fadeInUp" data-wow-delay="0.4s">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h2>OUR WORKSPACE</h2>
              </div>
            </div>
          </div>          
          <ul class="list-unstyled work-slider">
            <li>
              <div class="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div class="img-holder">
                <div class="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div class="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div class="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
            <li>
              <div class="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div class="img-holder">
                <div class="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div class="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div class="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
            <li>
              <div class="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div class="img-holder">
                <div class="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div class="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div class="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
          </ul>          
        </section>        
      </main>
    );
  }
}

export default Index;
