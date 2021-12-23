import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img11.jpeg";
import API from "../services";
// import "../assets/css/main.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
      type: [],
      new: [],
      typeSelected: [],
    };
    // console.log(JSON.parse(localStorage.getItem("cat")));
    // console.log(localStorage.getItem("cat"));
  }

  componentDidMount() {
    API.get(`product-category/list-parent`).then((result) =>
      this.setState({ cat: result.data })
    );
    API.get(`product-type/list`).then((result) =>
      this.setState({ type: result.data })
    );
    API.get(`product/latest`).then((result) =>
      this.setState({ new: result.data })
    );
  }

  onClick(e) {
    console.log(e);
  }

  handleChange(e) {
    let isChecked = e.target.checked;
    if (isChecked) {
      this.setState({
        typeSelected: [...this.state.typeSelected, e.target.value],
      });
    } else {
      const items = this.state.typeSelected.filter(
        (item) => item !== e.target.value
      );
      this.setState({
        typeSelected: items,
      });
    }
  }

  render() {
    const { url } = window.location.href;
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
              {this.state.type.length === 0 ? <p>Loading...</p> : ""}
              {this.state.type.map((item, index) => (
                <li key={item.id}>
                  <label for={`check-${index}`}>
                    <input
                      id={`check-${index}`}
                      type="checkbox"
                      onChange={(e) => this.handleChange(e)}
                      value={item.id}
                    />
                    <span className="fake-input"></span>
                    <span className="fake-label">{item.type_name}</span>
                  </label>
                  <span className="num">{item.total_product}</span>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-secondary mt-2"
              disabled={this.state.type.length === 0}
              onClick={() =>
                this.props.onChange("type", this.state.typeSelected)
              }
            >
              Apply
            </button>
          </section>

          <section className="shop-widget">
            <h2>CATEGORIES</h2>

            <ul className="list-unstyled category-list">
              {this.state.type.length === 0 ? "Loading..." : ""}
              {this.state.cat.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={() => this.props.onChange("cat", item.id)}
                  >
                    <span className="name">{item.category_name}</span>
                    <span className="num">{item.total_product}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="shop-widget">
            <h2>NEW PRODUCT</h2>

            {this.state.new.map((item) => (
              <div className="mt-product4 mt-paddingbottom20" key={item.id}>
                <div className="img">
                  <a href={`/product/detail?product=${item.id}`}>
                    <img src={`${API.urlStorage}/${item.photo_name}`} />
                  </a>
                </div>
                <div className="text">
                  <div className="frame">
                    <strong>
                      <a href={`/product/detail?product=${item.id}`}>
                        {item.product_name}
                      </a>
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </aside>
      </>
    );
  }
}

export default Category;
