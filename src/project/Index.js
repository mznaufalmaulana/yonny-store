import React from "react";
import Banner from "../component/Banner";
import { Pagination } from "@material-ui/lab";
import API from "../services";
import moment from "moment";
// import "../assets/css/main.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URLSearchParams(this.props.location.search);
    this.state = {
      list: [],
      newest: [],
      data: {
        from: 0,
        to: 0,
        total: 0,
        last_page: 0,
      },
      param: {
        page: this.url.get("page") ? parseInt(this.url.get("page"), 10) : 1,
      },
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.getList();
    this.getNew();
  }

  getList() {
    const param = this.state.param;
    API.get(`project/list?page=${param.page}`).then((result) => {
      this.setState({
        list: result.data.data,
        data: {
          from: result.data.from,
          to: result.data.to,
          total: result.data.total,
          last_page: result.data.last_page,
        },
        param: {
          page: this.url.get("page") ? parseInt(this.url.get("page"), 10) : 1,
        },
      });
    });
  }

  getNew() {
    API.get(`project/list/popular`).then((result) => {
      this.setState({
        newest: result.data,
      });
    });
  }

  onChangePage(e, val) {
    window.location.href = `?page=${val}`;
  }
  render() {
    const { data, param, newest, list } = this.state;
    return (
      <main id="mt-main">
        <Banner title="Project" />
        <div className="mt-blog-detail style1">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-8 wow fadeInLeft"
                data-wow-delay="1s"
              >
                {list.map((item, index) => {                
                  const tail = list.length;
                  if((tail-1) === index) {
                    return (
                      <article className="blog-post styleWithoutBorder" key={item.id}>
                        <div className="img-holder">
                          <a href={`/project/detail?project=${item.id}`}>
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                          <ul className="list-unstyled comment-nav">
                            <li>
                              <a href="#">
                                <i className="fa fa-share-alt"></i>
                                {item.share_count}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-txt">
                          <h2>
                            <a href={`/project/detail?project=${item.id}`}>
                              {item.project_name}
                            </a>
                          </h2>
                          <ul className="list-unstyled blog-nav">
                            <li>
                              {" "}                          
                              <i className="fa fa-clock-o"></i>{" "}
                              {moment(item.project_due).format("LL")}                          
                            </li>
                          </ul>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${item.description.substring(0, 200)}`,
                            }}
                          />
                          <a
                            href={`/project/detail?project=${item.id}`}
                            className="btn-more"
                          >
                            Read More
                          </a>
                        </div>
                      </article>
                    );
                  } else {
                    return (
                      <article className="blog-post style2" key={item.id}>
                        <div className="img-holder">
                          <a href={`/project/detail?project=${item.id}`}>
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                          <ul className="list-unstyled comment-nav">
                            <li>
                              <a href="#">
                                <i className="fa fa-share-alt"></i>
                                {item.share_count}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-txt">
                          <h2>
                            <a href={`/project/detail?project=${item.id}`}>
                              {item.project_name}
                            </a>
                          </h2>
                          <ul className="list-unstyled blog-nav">
                            <li>
                              {" "}                          
                              <i className="fa fa-clock-o"></i>{" "}
                              {moment(item.project_due).format("LL")}                          
                            </li>
                          </ul>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${item.description.substring(0, 200)}`,
                            }}
                          />
                          <a
                            href={`/project/detail?project=${item.id}`}
                            className="btn-more"
                          >
                            Read More
                          </a>
                        </div>
                      </article>
                    );
                  }                                                 
                })}

                <div className="btn-holder">
                  <Pagination
                    count={data.last_page}
                    page={param.page}
                    onChange={this.onChangePage}
                  />
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 text-right sidebar wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <section className="widget popular-widget">
                  <h3>POPULAR PROJECT</h3>
                  <ul className="list-unstyled text-right popular-post">
                    {newest.map((item) => (
                      <li key={item.id} className="wow fadeInUp" data-wow-delay="0.2s">
                        <div className="img-post">
                          <a href={`/project/detail?project=${item.id}`}>
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div className="info-dscrp">
                          <a href={`/project/detail?project=${item.id}`}>
                            {item.project_name}
                          </a>
                          <br />
                          <time>{moment(item.project_due).format("LL")}</time>
                        </div>
                      </li>
                    ))}
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
