import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <label>Name</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="input-container">
            <label>Email</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="input-container">
            <label>Message</label>
            <div>
              <textarea type="text" id="message">
                {" "}
              </textarea>
            </div>
          </div>
          <button className="send-button">
            Send <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    );
  }
}
