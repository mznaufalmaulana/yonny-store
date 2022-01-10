import React from "react";
import Banner from "../component/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import API from "../services";
import { Spinner } from "reactstrap";
import Notif from "../component/Notification";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      list: [],
      question: {
        name: "",
        email: "",
        message: "",
      },
      alert: {
        greetings: "",
        message: "",
        status: "",
        show: false,
      },
    };
  }

  componentDidMount() {
    API.get(`contact/list`).then((result) => {
      this.setState({ list: result.data });
    });
  }

  sendMail() {
    const { question } = this.state;
    let param = new FormData();
    param.append("name", question.name);
    param.append("email_address", question.email);
    param.append("message", question.message);
    this.setState({ isLoading: true });

    API.post(`email/receive`, param).then((result) => {
      if (result.status === 200) {
        this.setState({
          alert: {
            show: true,
            status: "success",
            greetings: "Congratulations! ",
            message: "Your Email Has Been Sent",
          },
          isLoading: false,
        });
      } else {
        this.setState({
          alert: {
            show: true,
            status: "danger",
            greetings: "Sorry! ",
            message: result.message,
          },
          isLoading: false,
        });
      }
    });

    setTimeout(
      function () {
        this.setState({
          alert: {
            show: false,
            status: "",
            greetings: "",
            message: "",
          },
        });
      }.bind(this),
      5000
    );
  }

  render() {
    const { list, question, isLoading, alert } = this.state;
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
                <Tabs className="tab-custom wow fadeInUp contact-text" data-wow-delay="0.5s">
                  <TabList>
                    {list.map((item) => (
                      <Tab key={item.id}>{item.region}</Tab>
                    ))}
                  </TabList>
                  {list.map((item) => (
                    <TabPanel className="tab-content">
                      <table className="table table-borderless" key={item.id}>
                        <thead>
                          <tr>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="txt-size">
                          {item.contact.map((addr) => (
                            <tr key={addr.id}>
                              <td className="tab-column">{addr.first_address}{addr.second_address}</td>
                              <td className="tab-column"><a href={`tel:${addr.phone}`}>{addr.phone}</a></td>
                              <td className="tab-column"><a href={`mailto:${addr.email}`}>{addr.email}</a></td>
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
                {alert.show && (
                  <div className={`alert alert-${alert.status}`}>
                    <strong>{alert.greetings}</strong> {alert.message}
                  </div>
                  // <Notif/>
                )}
                <form action="#" className="contact-form">
                  <fieldset>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) =>
                        this.setState({
                          question: {
                            ...question,
                            name: e.target.value,
                          },
                        })
                      }
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-Mail"
                      onChange={(e) =>
                        this.setState({
                          question: {
                            ...question,
                            email: e.target.value,
                          },
                        })
                      }
                    />
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      onChange={(e) =>
                        this.setState({
                          question: {
                            ...question,
                            message: e.target.value,
                          },
                        })
                      }
                    ></textarea>
                  </fieldset>
                </form>
                <button
                  className="btn-type3"
                  type="submit"
                  onClick={() => this.sendMail()}
                >
                  {isLoading ? <Spinner /> : "Send"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Index;
