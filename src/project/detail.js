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
                  <div class="img-holder wow fadeInUp" data-wow-delay="1s">                    
                    <Slide>
                      {photo.map((item) => (
                        <img
                          src={`${API.urlStorage}/${item.photo_name}`}
                          alt="image description"
                          key={item.id}
                        />
                      ))}
                    </Slide>
                  </div>                  
                  <time class="time" datetime="2016-02-03 20:00"><strong>25</strong>April</time>
                  <div class="blog-txt">
                    <h2>
                      {data.project_name}
                    </h2>
                    <ul class="list-unstyled blog-nav">
                      <li>
                        {" "}                        
                        <i class="fa fa-clock-o"></i>
                        {moment(data.project_due).format("LL")}                        
                      </li>
                      <li>
                        <a href="#" className="list-share">
                          <i class="fa fa-share-alt icon-share"></i>&nbsp;
                          {data.share_count}
                        </a>
                      </li>                      
                    </ul>
                    <div                
                      dangerouslySetInnerHTML={{
                        __html: `${data.description}`,
                      }}
                    />
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore impedit omnis tenetur deleniti, provident nulla vel reprehenderit ab sit illo officiis numquam et optio blanditiis atque! Placeat repudiandae distinctio est vitae. Tempore molestias, cum repudiandae dolores totam quae reprehenderit quaerat sed maiores iusto vitae. Laboriosam pariatur modi animi minima nam! Quibusdam maxime earum atque molestias nulla nihil a iusto ratione ea alias magni dolorum distinctio quidem unde laudantium possimus minima cumque, ut culpa itaque vero provident vitae. Facere numquam quae dignissimos nam ipsam doloremque quo fuga quisquam corrupti itaque? Ipsa nobis reprehenderit illo deleniti, architecto necessitatibus voluptate dolorem omnis.
                    </p> */}
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
