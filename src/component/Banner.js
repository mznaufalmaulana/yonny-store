import React from "react";

class Banner extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <section
        className="mt-contact-banner style4 wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>{this.props.title}</h1>
              <nav className="breadcrumbs">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      Home <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                  <li>
                    {this.props.title}                    
                  </li>                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
