import moment from "moment";
import React from "react";
import Banner from "../component/Banner";
import API from "../services";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../component/Toast";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URLSearchParams(this.props.location.search);
    this.state = {
      data: "",
      photo: [],
      related: [],
      param: {
        project: this.url.get("project"),
      },
      copied: false,
    };
  }

  componentDidMount() {
    const param = this.state.param;
    API.get(`project/detail/${param.project}`).then((result) => {
      this.setState({
        data: result.data[0],
        photo: result.data[0].photo,
      });
    });
  }

  copy() {
    const { param } = this.state;
    this.setState({ copied: true });
    API.get(`project/detail/share-count/${param.project}`).then((result) => {
      if (result.message === "success") {
        this.getshareCount();
      }
    });
  }

  getshareCount() {
    const { param, data } = this.state;
    API.get(`project/detail/${param.project}`).then((result) => {
      if (result.message === "success") {
        this.setState({
          data: {
            ...data,
            share_count: result.data[0].share_count,
          },
          copied: false,
        });
      }
    });
  }
  render() {
    const { data, photo, copied } = this.state;
    return (
      <main id="mt-main">
        {copied && <Toast text="Your Link was Copied" />}
        <Banner title="Project" />
        <div className="mt-blog-detail fullwidth wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">            
            <div className="row">
              <div className="col-xs-12 mar-top-5">                
                <article className="blog-post style3">
                  <div className="img-holder wow fadeInUp" data-wow-delay="1s">                    
                    {photo.map((item, index) => {
                      const order = [0];
                      return order.includes(index) ? (
                        <img
                          src={`${API.urlStorage}/${item.photo_name}`}
                          alt="image description"
                          key={item.id}
                        />
                      ): null;
                    })}
                     <time className="time" datetime="2016-02-03 20:00">
                      <strong>{moment(data.project_due).format("DD")}</strong>
                      {moment(data.project_due).format("MMM")}
                    </time>
                    <ul className="list-unstyled comment-nav">                      
                      <li> 
                        <CopyToClipboard
                          text={window.location.href}
                          onCopy={() => this.copy()}
                        >
                          <a className="list-share">
                            <i className="fa fa-share-alt icon-share"></i>
                            {data.share_count}
                          </a>
                        </CopyToClipboard>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-txt">
                    <h2>{data.project_name}</h2>
                    <ul className="list-unstyled blog-nav">
                      <li> 
                        {" "}
                        <i className="fa fa-clock-o"></i>
                        {moment(data.project_due).format("LL")}</li>              
                    </ul>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${data.description}`,
                      }}
                    />
                    <div className="img-block fullwidth wow fadeInUp" data-wow-delay="0.4s">
                      {photo.map((item) => (                          
                        <div className="img" key={item.id}>
                          <a href={`${API.urlStorage}/${item.photo_name}`} className="lightbox">
                            <img src={`${API.urlStorage}/${item.photo_name}`} alt="image description"/>
                            <i className="fa fa-search-plus"></i>
                          </a>
                        </div>
                      ))}                         
                    </div>                    
                  </div>
                </article>                                                                                  
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
