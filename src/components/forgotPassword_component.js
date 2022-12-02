import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const notify = () => toast("Link has been send to your email");
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        
        
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Password</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

       
        <div className="d-grid">
          <button onClick={notify} type="submit" className="btn btn-primary">
            Submit
          </button>
          <ToastContainer/>
        </div>
       
       
      </form>
    );
  }
}
