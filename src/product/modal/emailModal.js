import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import API from "../../services";
import swal from "@sweetalert/with-react";
import Toast from "../../component/Toast";
class emailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  sendMail() {
    const { question } = this.state;
    console.log(question);
    let param = new FormData();
    param.append("name", question.name);
    param.append("email_address", question.email);
    param.append("message", question.message);
    param.append("product_id", this.props.product_id);

    API.post(`email/receive`, param).then((result) => {
      if (result.status === 200) {
        this.setState({
          alert: {
            show: true,
            status: "success",
            greetings: "Congratulations!",
            message: "Your Email Has Been Sent",
          },
        });
      } else {
        this.setState({
          alert: {
            show: true,
            status: "danger",
            greetings: "Sorry!",
            message: result.message,
          },
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
    const { alert } = this.state;
    return (
      <div className="popup-holder">
        {alert.show && <Toast text={alert.message} />}
        <div id="popup" className="lightbox">
          <section className="mt-product-detial">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="slider">
                    <ul className="list-unstyled comment-list"></ul>
                    <div className="product-slider">
                      <div className="slide">
                        {this.props.photo.map((item, index) => {
                          const order = [0];
                          return order.includes(index) ? (
                            <div
                              className="slide wow fadeInUp"
                              data-wow-delay="0.2s"
                              key={item.id}
                            >
                              <img
                                src={`${API.urlStorage}/${item.photo_name}`}
                                alt="image descrption"
                              />
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="detial-holder">
                    <h2>{this.props.data.product_name}</h2>
                    <div className="product-comment">
                      <form className="p-commentform">
                        {/* <fieldset> */}
                        <div className="mt-row">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) =>
                              this.setState({
                                question: {
                                  ...this.state.question,
                                  name: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="mt-row">
                          <label>E-Mail</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) =>
                              this.setState({
                                question: {
                                  ...this.state.question,
                                  email: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="mt-row">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            onChange={(e) =>
                              this.setState({
                                question: {
                                  ...this.state.question,
                                  message: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        {/* </fieldset> */}
                      </form>
                      <button
                        href="#"
                        className="btn-type1"
                        onClick={() => console.log("masuk")}
                        // onClick={() => this.sendMail()}
                      >
                        <b>SEND EMAIL</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default emailModal;
