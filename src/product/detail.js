import React from "react";
import API from "../services";
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
        product: this.url.get("product"),
        category: this.url.get("category"),
      },
    };
  }

  componentDidMount() {
    const param = this.state.param;
    API.get(`product/detail/${param.product}`).then((result) => {
      this.setState({
        data: result.data[0],
        photo: result.data[0].photo,
      });
    });
    API.get(`product/related/${param.category}`).then((result) => {
      this.setState({
        related: result.data,
      });
    });
  }

  render() {
    const { data, photo, related } = this.state;
    return (
      <main id="mt-main">
        <section
          className="mt-product-detial wow fadeInUp mb-5"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="slider">
                  <ul className="list-unstyled comment-list"></ul>
                  <div className="slide-container">
                    <Slide>
                      {photo.map((item) => (
                        <div className="slide" key={item.id}>
                          <img
                            src={`${API.urlStorage}/${item.photo_name}`}
                            alt="image descrption"
                          />
                        </div>                
                      ))}
                    </Slide>
                  </div>
                </div>

                <div className="detial-holder">
                  <ul className="list-unstyled breadcrumbs">
                    <li>
                      <a href="/product">
                        Product <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                    <li>{data.product_name}</li>
                  </ul>

                  <h2>{data.product_name}</h2>

                  <ul className="list-unstyled list">
                    <li>
                      <a href="#" id="modal-buttton" data-toggle="modal" data-target="#my-modal">                        
                        <i className="fa fa-share-alt"></i>{data.share_count}                       
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-eye"></i>{data.seen_count}
                      </a>
                    </li>
                  </ul>
                  <div
                    className="txt-wrap"
                    dangerouslySetInnerHTML={{
                      __html: `${data.description}`,
                    }}
                  />          
                  {/* <div className="product-comment">
                    <form action="#" class="p-commentform">
											<fieldset>													
												<div class="mt-row">
													<label>Name</label>
													<input type="text" class="form-control" />
												</div>
												<div class="mt-row">
													<label>E-Mail</label>
													<input type="text" class="form-control" />
												</div>
												<div class="mt-row">
													<label>Review</label>
													<textarea class="form-control"></textarea>
												</div>
												<button type="submit" class="btn-type1">ADD REVIEW</button>
											</fieldset>
										</form>
                  </div>         */}
                </div>                
              </div>
            </div>
          </div>
        </section>
        {/* <div class="product-detail-tab wow fadeInUp" data-wow-delay="0.4s">
					<div class="container">
						<div class="row">
							<div class="col-xs-12">					
								<div class="tab-content">									
									<div id="tab3">
										<div class="product-comment">										
											<form action="#" class="p-commentform">
												<fieldset>
													<h2>Add  Comment</h2>													
													<div class="mt-row">
														<label>Name</label>
														<input type="text" class="form-control"/>
													</div>
													<div class="mt-row">
														<label>E-Mail</label>
														<input type="text" class="form-control"/>
													</div>
													<div class="mt-row">
														<label>Review</label>
														<textarea class="form-control"></textarea>
													</div>
													<button type="submit" class="btn-type4">ADD REVIEW</button>
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
        <br />
        <br />

        <div className="related-products wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>RELATED PRODUCTS</h2>
                <br />
                <div className="row">
                  <div className="col-xs-12">
                    {related.map((item) => (
                      <div className="mt-product1">
                        <div className="box">                          
                          <a href={`/product/detail?product=${item.id}&category=${this.state.param.category}`}>
                            <img
                              src={`${API.urlStorage}/${item.photo_name}`}
                              alt="image description"
                            />
                          </a>
                        </div>
                        <div className="txt">
                          <strong className="title">
                            <a href={`/product/detail?product=${item.id}&category=${this.state.param.category}`}>
                              {item.product_name}
                            </a>
                          </strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
