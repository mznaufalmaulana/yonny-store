import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img11.jpeg";
// import "../assets/css/main.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <aside
          id="sidebar"
          className="col-xs-12 col-sm-4 col-md-3 wow fadeInLeft"
          data-wow-delay="0.4s"
        >
          <section className="shop-widget filter-widget bg-grey">
            <h2>FILTER</h2>
            <span className="sub-title">Filter by Type</span>

            <ul className="list-unstyled nice-form">
              <li>
                <label for="check-1">
                  {/* <input id="check-1" type="checkbox"> */}
                  <span className="fake-input"></span>
                  <span className="fake-label">Marble</span>
                </label>
                <span className="num">2</span>
              </li>
              <li>
                <label for="check-2">
                  {/* <input id="check-2" type="checkbox"> */}
                  <span className="fake-input"></span>
                  <span className="fake-label">Onyx</span>
                </label>
                <span className="num">12</span>
              </li>
              <li>
                <label for="check-3">
                  {/* <input id="check-3" checked="checked" type="checkbox"> */}
                  <span className="fake-input"></span>
                  <span className="fake-label">Granit</span>
                </label>
                <span className="num">4</span>
              </li>
              <li>
                <label for="check-4">
                  {/* <input id="check-4" type="checkbox"> */}
                  <span className="fake-input"></span>
                  <span className="fake-label">Petrified Wood</span>
                </label>
                <span className="num">4</span>
              </li>
            </ul>
          </section>

          <section className="shop-widget">
            <h2>CATEGORIES</h2>

            <ul className="list-unstyled category-list">
              <li>
                <a href="#">
                  <span className="name">LIVING ROOM</span>
                  <span className="num">12</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">DINING ROOM</span>
                  <span className="num">24</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">BEDROOM</span>
                  <span className="num">9</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">GARDEN</span>
                  <span className="num">2</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">BATHROOM</span>
                  <span className="num">17</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">MOSAIC</span>
                  <span className="num">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">STATUE</span>
                  <span className="num">23</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">SLAB</span>
                  <span className="num">23</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="name">COLLECTION</span>
                  <span className="num">23</span>
                </a>
              </li>
            </ul>
          </section>

          <section className="shop-widget">
            <h2>NEW COLLECTION</h2>

            <div className="mt-product4 mt-paddingbottom20">
              <div className="img">
                <a href="product-detail.html">
                  <img src="images/demo/img14.jpg" />
                </a>
              </div>
              <div className="text">
                <div className="frame">
                  <strong>
                    <a href="product-detail.html">Egon Wooden Chair</a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-product4 mt-paddingbottom20">
              <div className="img">
                <a href="product-detail.html">
                  <img src="images/demo/img15.jpg" />
                </a>
              </div>
              <div className="text">
                <div className="frame">
                  <strong>
                    <a href="product-detail.html">Oyo Cantilever Chair</a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-product4 mt-paddingbottom20">
              <div className="img">
                <a href="product-detail.html">
                  <img src="images/demo/img16.jpg" />
                </a>
              </div>
              <div className="text">
                <div className="frame">
                  <strong>
                    <a href="product-detail.html">Kurve Chair</a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-product4 mt-paddingbottom20">
              <div className="img">
                <a href="product-detail.html">
                  <img src="images/demo/img14.jpg" />
                </a>
              </div>
              <div className="text">
                <div className="frame">
                  <strong>
                    <a href="product-detail.html">Marvelous Wooden Chair</a>
                  </strong>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </>
    );
  }
}

export default Category;
