import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const notify = () => toast("updated successful");
export default class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      place: "",
      number:"",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, place, number, email } = this.state;
    console.log(name, place,number,email);
    fetch("http://localhost:5000/updateprofile", {
      method: "PATCH",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        place,
        number,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       notify();
      });
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Update Profile</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Your Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Place</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Your Location"
            onChange={(e) => this.setState({ place: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e) => this.setState({ number: e.target.value })}
          />
        </div>

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
      </div>
    );
  }
}
