import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Done");
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email not matched";
    } else {
      error.email = "";
    }

    if (!password) {
      error.password = "password is Required";
    } else if (password.length < 8) {
      error.password = "Password not matched";
    } else {
      error.password = "";
    }
    return error;
  };

  return (
    <div className="container">
      <div className="form_container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"> Email:</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button>Login</button>
        </form>
        <a href="#">Sing Up</a>
      </div>
    </div>
  );
}

export default Form;
