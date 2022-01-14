import React from "react";
import Banner from "../component/Banner";
import Category from "../component/Category";
import API from "../services";
import { Pagination } from "@material-ui/lab";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URLSearchParams(this.props.location.search);
    this.state = {
      list: [],
      data: {
        from: 0,
        to: 0,
        total: 0,
        last_page: 0,
      },
      param: {
        cat: this.url.get("category") ? this.url.get("category") : "",
        page: this.url.get("page") ? parseInt(this.url.get("page"), 10) : 1,
        sort: this.url.get("sort") ? this.url.get("sort") : "",
        type: this.url.get("type[]") ? this.url.getAll("type[]") : "",
        name: this.url.get("search") ? this.url.get("search") : "",
      },
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeParams = this.onChangeParams.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    const param = this.state.param;
    let type = "";
    if (param.type) {
      for (let i = 0; i < param.type.length; i++) {
        type += `&type[]=${param.type[i]}`;
      }
    }
    API.get(
      `product/list?page=${param.page}&sort=${param.sort}&category=${param.cat}&name=${param.name}${type}`
    ).then((result) => {
      this.setState({
        list: result.data.data,
        data: {
          from: result.data.from,
          to: result.data.to,
          total: result.data.total,
          last_page: result.data.last_page,
        },
      });
    });
  }

  // getCategory() {
  //   const param = this.state.param;
  //   API.get(
  //     `product/list?page=${param.page}&sort=${param.sort}&category=${param.cat}&name=${param.name}${type}`
  //   ).then((result) => {
  //     this.setState({
  //       list: result.data.data,
  //       data: {
  //         from: result.data.from,
  //         to: result.data.to,
  //         total: result.data.total,
  //         last_page: result.data.last_page,
  //       },
  //     });
  //   });
  // }

  onChangePage(e, val) {
    const param = this.state.param;
    let url = "";
    param.sort ? (url += `&sort=${param.sort}`) : (url = `${url}`);
    param.cat ? (url += `&category=${param.cat}`) : (url = `${url}`);

    if (param.type) {
      for (let i = 0; i < param.type.length; i++) {
        url += `&type[]=${param.type[i]}`;
      }
    }

    window.location.href = `?page=${val ? val : param.page}${url}`;
  }

  onChangeParams(id, val) {
    if (id === "cat")
      this.setState(
        { param: { ...this.state.param, cat: val, page: 1 } },
        function () {
          this.onChangePage();
        }
      );
    else if (id === "type")
      this.setState(
        { param: { ...this.state.param, type: val, page: 1 } },
        function () {
          this.onChangePage();
        }
      );
    else if (id === "sort")
      this.setState(
        { param: { ...this.state.param, sort: val, page: 1 } },
        function () {
          this.onChangePage();
        }
      );
  }

  incremetSeen(id) {
    API.get(`product/detail/seen-count/${id}`);
  }

  render() {
    const { data, param } = this.state;
    return (
      <main id="mt-main">
        <Banner title="Product" category={this.state.param.cat} />
        <div className="container">
          <div className="row">
            <Category
              onChange={(id, val) => this.onChangeParams(id, val)}
              paramType={param.type}
            />
            <div
              className="col-xs-12 col-sm-8 col-md-9 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <header className="mt-shoplist-header">
                <div className="btn-box">
                  <ul className="list-inline">
                    <li>
                      <a href="#" className="drop-link">
                        Default Sorting{" "}
                        <i aria-hidden="true" className="fa fa-angle-down"></i>
                      </a>
                      <div className="drop">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              href="#"
                              onClick={() => this.onChangeParams("sort", "asc")}
                            >
                              ASC
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={() =>
                                this.onChangeParams("sort", "desc")
                              }
                            >
                              DESC
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-textbox">
                  <h2>
                    <strong>Category : </strong>
                    All
                  </h2>
                  <p>
                    Showing{" "}
                    <strong>
                      {data.from}–{data.to}
                    </strong>{" "}
                    of <strong>{data.total}</strong> results
                  </p>
                </div>
              </header>

              <ul className="mt-productlisthold list-inline">
                {this.state.list
                  ? this.state.list.length <= 0 && (
                      <div>
                        <p className="text-center">
                          Sorry, We Couldn't Find What You Want :(
                        </p>
                      </div>
                    )
                  : null}

                {this.state.list ? this.state.list.map((item) => (
                  <li key={item.id}>
                    <div
                      className="mt-product1 text-center large wow fadeInRight image-zoom"
                      data-wow-delay="0.2s"
                    >
                      <div className="box bg-grey">
                        <div className="b1">
                          <div className="b2">
                            <a href={`/product/detail?product=${item.id}`}>                             
                              <img
                                className="img-product-list"
                                src={`${API.urlStorage}/${item.photo_name}`}
                                alt={item.product_name}
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    ))
                  : null}
              </ul>

              <nav className="mt-pagination paging">
                <Pagination
                  count={data.last_page}
                  page={param.page}
                  onChange={this.onChangePage}
                  className="paging"
                />
              </nav>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
