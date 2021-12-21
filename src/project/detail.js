import moment from "moment";
import React from "react";
import Banner from "../component/Banner";
import API from "../services";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

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
  render() {
    const { data, photo } = this.state;
    return (
      <main id="mt-main">
        <Banner title="Project" />
        <div class="mt-blog-detail style1">
          <div class="container">
            <div class="row">
              <div
                class="col-xs-12 col-sm-12 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <article class="blog-post detail">
                  <div class="slide-container">
                    <Slide>
                      {photo.map((item) => (
                        <img
                          src={`${API.urlStorage}/${item.photo_name}`}
                          alt="image description"
                        />
                      ))}
                    </Slide>
                  </div>
                  <br />
                  <div class="blog-txt">
                    <h2>
                      <a href="blog-right-sidebar.html">{data.project_name}</a>
                    </h2>
                    <ul class="list-unstyled blog-nav">
                      <li>
                        {" "}                        
                        <i class="fa fa-clock-o"></i>
                        {moment(data.project_due).format("LL")}                        
                      </li>
                    </ul>
                    <div
                      className="txt-wrap"
                      dangerouslySetInnerHTML={{
                        __html: `${data.description}`,
                      }}
                    />
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
