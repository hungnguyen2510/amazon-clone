import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.offers.vn/wp-content/uploads/2016/06/mua-hang-amazon.png"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_signInButton">Sign In</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login_registerButton">Create your amazon account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
