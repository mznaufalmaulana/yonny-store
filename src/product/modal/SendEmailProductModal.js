import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import API from "../../services";
import swal from "@sweetalert/with-react";
class SendEmailProductModal extends React.Component {
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
      <div className="product-detail-tab wow fadeInUp" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div id="tab3">
                <form action="#" className="p-commentform">
                  <fieldset>
                    <h2>Any Question?</h2>
                    {alert.show && (
                      <div className={`alert alert-${alert.status}`}>
                        <strong>{alert.greetings}</strong> {alert.message}
                      </div>
                    )}
                    <div className="mt-row mar-top-1">
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
                    <div className="mt-row mar-top-1">
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
                    <div className="mt-row mar-top-1">
                      <label>Question</label>
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
                  </fieldset>
                </form>
                <button className="btn-type1 mar-top-button-2" onClick={() => this.sendMail()}>
                  Send Email
                </button>
              </div>
            </div>
            {/* <div className="col-xs-12 col-md-6" data-wow-delay="0.4s">
              <img    
                className="img-size wow fadeInUp"            
                src={`${API.urlStorage}${this.props.photo_name}`}
                alt="image descrption"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SendEmailProductModal;
