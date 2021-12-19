import React from "react";
import logo from "../assets/images/mt-logo.png";
import img from "../assets/images/demo/img07.jpg";
import img2 from "../assets/images/demo/img12.jpg";
import img3 from "../assets/images/demo/img13.jpg";
import Banner from "../component/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import API from "../services";

// import "../assets/css/main.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    API.get(`contact/list`).then((result) => {
      this.setState({ list: result.data });
    });
  }
  render() {
    const { list } = this.state;
    return (
      <main id="mt-main">
        <Banner title="Contact" />
        <section
          className="mt-contact-detail content-info wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="txt-wrap">
                  <h1>Lorem. chair maker</h1>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut <br />
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut <br />
                    aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <Tabs>
                  <TabList>
                    {list.map((item) => (
                      <Tab>{item.region}</Tab>
                    ))}
                  </TabList>

                  {list.map((item) => (
                    <TabPanel>
                      <ul className="list-unstyled contact-txt">
                        <li>
                          <strong>Address</strong>
                          <address>{item.contact[0].address}</address>
                        </li>
                        <li>
                          <strong>Phone</strong>
                          <a href="#">{item.contact[0].phone}</a>
                        </li>
                        <li>
                          <strong>E_mail</strong>
                          <a href="#">{item.contact[0].email}</a>
                        </li>
                      </ul>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2>Have a question?</h2>
                <form action="#" className="contact-form">
                  <fieldset>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-Mail"
                    />
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                    <button className="btn-type3" type="submit">
                      Send
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Index;
