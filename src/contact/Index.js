import React from "react";
import Banner from "../component/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import API from "../services";

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
    console.log(list);
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
                <div className="contact-address">
                  <h1>Contact Address</h1>
                </div>
                <Tabs className="tabcustom">
                  <TabList>
                    {list.map((item) => (
                      <Tab>{item.region}</Tab>
                    ))}
                  </TabList>
                  {list.map((item) => (
                    <TabPanel>
                      <table className="table table-borderless wow fadeInUp" data-wow-delay="0.2s">
                        <thead>
                          <tr>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.contact.map((addr) => (
                            <tr>
                              <td>{addr.address}</td>
                              <td>{addr.phone}</td>
                              <td>{addr.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              <div className="col-xs-12 col-sm-4 form-question">
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
