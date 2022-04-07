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
      loading: false,
    };
  }

  sendMail() {
    const { question } = this.state;
    this.setState({ loading: true });
    let param = new FormData();
    param.append("name", question.name);
    param.append("email_address", question.email);
    param.append("message", question.message);
    param.append("product_id", this.props.product_id);
    let state;

    API.post(`email/receive`, param).then((result) => {
      if (result.status === 200) {
        state = result.status;
        this.setState({
          loading: false,
          alert: {
            show: true,
            status: "success",
            greetings: "Congratulations!",
            message: "Your Email Has Been Sent",
          },
        });
      } else {
        state = result.status;
        this.setState({
          loading: false,
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
        if (state === 200) {
          window.location.reload();
        }
      }.bind(this),
      3000
    );
  }

  render() {
    const { alert, loading } = this.state;
    return (
      <div className="popup-holder">
        {alert.show && <Toast text={alert.message} />}
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-grey">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">
                  <b>Any Question of The Product?</b>
                </h4>
              </div>
              <div className="modal-body">
                <div className="detial-holder">
                  <h2 className="text-center question-modal">
                    <b>{this.props.data.product_name}</b>
                  </h2>
                  {this.props.photo.map((item, index) => {
                    const order = [0];
                    return order.includes(index) ? (
                      <div
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                        key={item.id}
                      >
                        <img
                          src={`${API.urlStorage}/${item.photo_name}`}
                          alt="image descrption"
                          className="img-responsive img-modal"
                        />
                      </div>
                    ) : null;
                  })}
                  <div className="product-comment">
                    <form className="p-commentform">
                      <div className="mt-row">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          required
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
                          required
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
                          required
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
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-grey">
                <button
                  type="button"
                  className="btn-type1 btn-modal-close"
                  data-dismiss="modal"
                  disabled={loading}
                >
                  <b>CLOSE</b>
                </button>
                <button
                  type="button"
                  className="btn-type1 btn-modal-email"
                  onClick={() => this.sendMail()}
                  disabled={loading}
                >
                  <b>SEND EMAIL</b> {loading && "..."}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default emailModal;
