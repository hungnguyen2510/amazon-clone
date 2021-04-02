import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.offers.vn/wp-content/uploads/2016/06/mua-hang-amazon.png"
          alt=""
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login_registerButton" onClick={register}>
            Create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
