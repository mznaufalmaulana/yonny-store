import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <section className="mt-error-sec dark style3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="error-holder pull-right">
                  <h1 className="text-uppercase montserrat">PAGE NOT FOUND!</h1>
                  <div className="txt">
                    <p>The page you are looking for was moved, <br />removed, renamed or might never existed.</p>
                  </div>
                  <a href="/" className="btn-back text-uppercase">BACK TO HOME</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <span className="error-code2 montserrat">404</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default NotFound;
