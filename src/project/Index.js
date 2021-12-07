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
        <Banner title="Project" />
        <div className="mt-blog-detail style1">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 wow fadeInLeft" data-wow-delay="0.4s">                
                <article className="blog-post style2">
                  <div className="img-holder">                    
                    <a href="blog-post-detail-sidebar.html"><img src="images/demo/imgProject1.jpg" alt="image description" /></a>
                    <ul className="list-unstyled comment-nav">                      
                      <li><a href="#"><i className="fa fa-share-alt"></i>14</a></li>
                    </ul>
                  </div>
                  <div className="blog-txt">
                    <h2><a href="blog-post-detail-sidebar.html">IDEAS FOR LIVING ROOMS</a></h2>
                    <ul className="list-unstyled blog-nav">
                      <li> <a href="#"><i className="fa fa-clock-o"></i>20 April 2015</a></li>                                            
                    </ul>
                    <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. </p>
                    <a href="blog-post-detail-sidebar.html" className="btn-more">Read More</a>
                  </div>
                </article>       
                <article className="blog-post style2">
                  <div className="img-holder">
                    <a href="blog-post-detail-sidebar.html"><img src="images/demo/imgProject2.jpg" alt="image description" /></a>
                    <ul className="list-unstyled comment-nav">                      
                      <li><a href="#"><i className="fa fa-share-alt"></i>14</a></li>
                    </ul>
                  </div>
                  <div className="blog-txt">
                    <h2><a href="blog-post-detail-sidebar.html">IDEAS FOR LIVING ROOMS</a></h2>
                    <ul className="list-unstyled blog-nav">
                      <li> <a href="#"><i className="fa fa-clock-o"></i>20 April 2015</a></li>                      
                    </ul>
                    <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. </p>
                    <a href="blog-post-detail-sidebar.html" className="btn-more">Read More</a>
                  </div>
                </article>               
                <article className="blog-post style2">
                  <div className="img-holder">
                    <a href="blog-post-detail-sidebar.html"><img src="images/demo/imgProject3.jpg" alt="image description" /></a>
                    <ul className="list-unstyled comment-nav">                      
                      <li><a href="#"><i className="fa fa-share-alt"></i>14</a></li>
                    </ul>
                  </div>
                  <div className="blog-txt">
                    <h2><a href="blog-post-detail-sidebar.html">IDEAS FOR LIVING ROOMS</a></h2>
                    <ul className="list-unstyled blog-nav">
                      <li> <a href="#"><i className="fa fa-clock-o"></i>20 April 2015</a></li>                      
                    </ul>
                    <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. </p>
                    <a href="blog-post-detail-sidebar.html" className="btn-more">Read More</a>
                  </div>
                </article>                                
                <div className="btn-holder">
                  <ul className="list-unstyled pagination">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div>                
              </div>
              <div className="col-xs-12 col-sm-4 text-right sidebar wow fadeInRight" data-wow-delay="0.4s">                                                
                <section className="widget popular-widget">
                  <h3>POPULAR POST</h3>
                  <ul className="list-unstyled text-right popular-post">
                    <li>
                      <div className="img-post">                        
                        <a href="#"><img src="images/demo/imgSmProject1.jpg" alt="image description" /></a>
                      </div>
                      <div className="info-dscrp">
                        <p>Vestibulum sit amet metus euismod amet metus euismod</p>
                        <time datetime="2016-02-03 20:00">24.09.2015</time>
                      </div>
                    </li>
                    <li>
                      <div className="img-post">
                        <a href="#"><img src="images/demo/imgSmProject2.jpg" alt="image description" /></a>
                      </div>
                      <div className="info-dscrp">
                        <p>Luctus id risus vel, ultricies dignissim lacus etiam dolor sem</p>
                        <time datetime="2016-02-03 20:00">24.09.2015</time>
                      </div>
                    </li>
                    <li>
                      <div className="img-post">
                        <a href="#"><img src="images/demo/imgSmProject3.jpg" alt="image description" /></a>
                      </div>
                      <div className="info-dscrp">
                        <p>Aenean lacus mi, porttitor quis <br/>dapibustincidunt</p>
                        <time datetime="2016-02-03 20:00">24.09.2015</time>
                      </div>
                    </li>
                    <li>
                      <div className="img-post">
                        <a href="#"><img src="images/demo/imgSmProject4.jpg" alt="image description" /></a>
                      </div>
                      <div className="info-dscrp">
                        <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut</p>
                        <time datetime="2016-02-03 20:00">24.09.2015</time>
                      </div>
                    </li>
                  </ul>
                </section>                              
              </div>
            </div>
          </div>
        </div>        
      </main>
    );
  }
}

export default Index;
