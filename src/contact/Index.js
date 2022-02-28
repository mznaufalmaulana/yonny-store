import React from "react";
import Banner from "../component/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import API from "../services";
import { Spinner } from "reactstrap";
import Toast from "../component/Toast";

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
        {alert.show && <Toast text={alert.message} />}
        <Banner title="Contact" />
        <section
          className="mt-contact-detail content-info wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="contact-address">
                  <h1>Contact Address</h1>
                </div>
                <Tabs
                  className="tab-custom wow fadeInUp contact-text"
                  data-wow-delay="0.5s"
                >
                  <TabList>
                    {list.map((item) => (
                      <Tab key={item.id}>{item.region}</Tab>
                    ))}
                  </TabList>
                  {list.map((item) => (
                    <TabPanel className="tab-content">
                      <table
                        className="table border-less txt-size"
                        key={item.id}
                      >
                        <thead>
                          <tr>
                            <th>Address</th>
                          </tr>
                        </thead>
                        {item.contact.map((addr) => (
                          <tbody key={item.id + "addres"}>
                            <tr>
                              <td>
                                {addr.first_address}
                                {addr.second_address}
                              </td>
                            </tr>
                          </tbody>
                        ))}

                        <thead>
                          <tr>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        {item.contact.map((addr) => (
                          <tbody key={item.id + "phone"}>
                            <tr>
                              <td>
                                <a href={`tel:${addr.phone}`}>{addr.phone}</a>
                              </td>
                            </tr>
                          </tbody>
                        ))}

                        <thead>
                          <tr>
                            <th>Email</th>
                          </tr>
                        </thead>
                        {item.contact.map((addr) => (
                          <tbody key={item.id + "email"}>
                            <tr>
                              <td>
                                <a href={`mailto:${addr.email}`}>
                                  {addr.email}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              <div className="col-xs-12 col-md-4 form-question">
                <h1 className="pad-bot-2">Have a question?</h1>
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
