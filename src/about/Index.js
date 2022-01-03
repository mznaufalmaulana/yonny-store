import React from "react";
import Banner from "../component/Banner";
import { makeStyles } from "@material-ui/core/styles";
import IndexTabs from "./components/Tabs";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    const useStyles = makeStyles({
      root: {
        flexGrow: 1,
        backgroundColor: "transparent",
      },
    });
    const { value } = this.state;
    return (
      <main id="mt-main">
        <Banner title="About" />
        <section className="mt-about-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <IndexTabs />
              </div>
            </div>
          </div>
        </section>
        {/* <Paper className={useStyles.root}>
          <Tabs
            value={value}
            onChange={(e, newVal) => this.setState({ value: newVal })}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper> */}
        {/* <section className="mt-about-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="txt">
                  <h2>OUR STORY</h2>
                  <p>Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <strong>Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.</strong></p>
                  <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at, </p>
                </div>
                <div className="mt-follow-holder">
                  <span className="title">Follow Us</span>                  
                  <ul className="list-unstyled social-network">
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                  </ul>                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-workspace-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>OUR WORKSPACE</h2>
              </div>
            </div>
          </div>          
          <ul className="list-unstyled work-slider">
            <li>
              <div className="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div className="img-holder">
                <div className="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div className="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div className="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
            <li>
              <div className="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div className="img-holder">
                <div className="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div className="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div className="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
            <li>
              <div className="img-holder">                
                <img src="images/demo/img48.jpeg" alt="image description"/>
              </div>
              <div className="img-holder">
                <div className="coll1">                  
                  <img src="images/demo/img49.jpeg" alt="image description"/>
                </div>
                <div className="coll2">                  
                  <img src="images/demo/img50.jpeg" alt="image description"/>
                </div>
                <div className="coll3">                  
                  <img src="images/demo/img51.jpeg" alt="image description"/>
                </div>
              </div>
            </li>
          </ul>          
        </section>         */}
      </main>
    );
  }
}

export default Index;
