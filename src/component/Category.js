import React from "react";
import API from "../services";
// import "../assets/css/main.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
      type: [],
      newest: [],
      typeSelected: props.paramType,
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
      this.setState({ newest: result.data })
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
    const { typeSelected, type, cat, newest } = this.state;
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
              {type.length === 0 ? <p>Loading...</p> : ""}
              {type.map((item, index) => (
                <li key={index}>
                  <label for={`check-${index}`}>
                    {typeSelected.indexOf(item.id.toString()) > -1 ? (
                      <input
                        id={`check-${index}`}
                        type="checkbox"
                        onChange={(e) => this.handleChange(e)}
                        value={item.id}
                        checked
                      />
                    ) : (
                      <input
                        id={`check-${index}`}
                        type="checkbox"
                        onChange={(e) => this.handleChange(e)}
                        value={item.id}
                      />
                    )}
                    <span className="fake-input"></span>
                    <span className="fake-label">{item.type_name}</span>
                  </label>
                  <span className="num">{item.total_product}</span>
                </li>
              ))}
            </ul>
            <br />
            <button
              className="btn btn-secondary mt-2"
              disabled={type.length === 0}
              onClick={() => this.props.onChange("type", typeSelected)}
            >
              Apply
            </button>
          </section>

          <section className="shop-widget">
            <h2>CATEGORIES</h2>

            <ul className="list-unstyled category-list">
              {cat.length === 0 ? (
                "Loading..."
              ) : (
                <li>
                  <a href="#" onClick={() => this.props.onChange("cat", 0)}>
                    <span className="name">All Categories</span>
                    <span className="num">
                      {cat.reduce((a, v) => (a = a + v.total_product), 0)}
                    </span>
                  </a>
                </li>
              )}
              {cat.map((item) => (
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
            <h2>LATEST PRODUCT</h2>

            {newest.map((item) => (
              <div className="mt-product4 mt-paddingbottom20 wow fadeInUp image-zoom" data-wow-delay="0.2s" key={item.id}>
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
