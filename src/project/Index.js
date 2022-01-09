import React from "react";
import Banner from "../component/Banner";
import { Pagination } from "@material-ui/lab";
import API from "../services";
import moment from "moment";

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
    const { data, param, list } = this.state;
    return (
      <main id="mt-main">
        <Banner title="Project" />
        <div className="mt-blog-detail style4">
          <div className="container">            
            <div className="row">              
              <div className="col-xs-12 mar-top-4">
                <div className="blog-isotops">
                  {list.map((item) => (                  
                    <article className="post-blog wow fadeInLeft" data-wow-delay="0.4s" key={item.id}>
                      <div className="img-holder image-zoom">
                        <a href={`/project/detail?project=${item.id}`}>
                          <img src={`${API.urlStorage}/${item.photo_name}`} alt="image description"/>
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
                      <time className="time" dateTime="2016-02-03 20:00">
                        <strong>{moment(item.project_due).format("DD")}</strong>
                        {moment(item.project_due).format("MMM")}
                      </time>                      
                      <div className="txt-holder">
                        <div className="project-name">                        
                          <a href={`/project/detail?project=${item.id}`}>
                            {item.project_name}
                          </a>                        
                        </div>                    
                      </div>
                      <a href={`/project/detail?project=${item.id}`} className="btn-more">
                        <i className="fa fa-angle-right"></i> More Detail
                      </a>
                    </article>                  
                  ))}                            
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="btn-holder">
                  <Pagination
                    count={data.last_page}
                    page={param.page}
                    onChange={this.onChangePage}
                  />                
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
