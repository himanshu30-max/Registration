import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import ProfileUpdate from "./components/userDetails";
import ForgotPassword from "./components/forgotPassword_component";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<ProfileUpdate />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
