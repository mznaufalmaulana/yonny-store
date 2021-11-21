import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img07.jpg";
import img2 from "../assets/images/demo/img12.jpg";
import img3 from "../assets/images/demo/img13.jpg";
import Banner from "../component/Banner";
import Category from "../component/Category";
// import "../assets/css/main.css";

class Index extends React.Component {
  render() {
    return (
      <main id="mt-main">
        <Banner title="Product" />
        <div class="container">
          <div class="row">
            <Category />
            <div
              class="col-xs-12 col-sm-8 col-md-9 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <header class="mt-shoplist-header">
                <div class="btn-box">
                  <ul class="list-inline">
                    <li>
                      <a href="#" class="drop-link">
                        Default Sorting{" "}
                        <i aria-hidden="true" class="fa fa-angle-down"></i>
                      </a>
                      <div class="drop">
                        <ul class="list-unstyled">
                          <li>
                            <a href="#">ASC</a>
                          </li>
                          <li>
                            <a href="#">DSC</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="mt-textbox">
                  <p>
                    Showing <strong>1–9</strong> of <strong>65</strong> results
                  </p>
                  <p>
                    View <a href="#">9</a> / <a href="#">18</a> /{" "}
                    <a href="#">27</a> / <a href="#">All</a>
                  </p>
                </div>
              </header>

              <ul class="mt-productlisthold list-inline">
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img22.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Bombi Chair</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img23.jpg" />
                          </a>
                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">
                          Marvelous Modern 3 Seater
                        </a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img24.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Chair with armrests</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img67.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Pouf Chair</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img71.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Jalis Counter stool</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img68.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Bombi Chair</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img67.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Lucky Chair</a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img68.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">
                          Cut Chair with 4 Spoke Base
                        </a>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mt-product1 large">
                    <div class="box">
                      <div class="b1">
                        <div class="b2">
                          <a href="product-detail.html">
                            <img src="images/demo/img69.jpg" />
                          </a>

                          <ul class="links">
                            <li>
                              <a href="#">
                                <i class="icomoon icon-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icomoon icon-heart-empty"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="txt">
                      <strong class="title">
                        <a href="product-detail.html">Yard SeChair</a>
                      </strong>
                    </div>
                  </div>
                </li>
              </ul>

              <nav class="mt-pagination">
                <ul class="list-inline">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
