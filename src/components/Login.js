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
    </div>
  );
};

export default Login;
