import React from "react";
import "../styles/login.css";
// import Signup from "./Signup";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>

    
      <div className="mainhead">
        <div className="header">
          <h1>Login</h1>
          <br /><br />
        </div>
        <div className="login-page">
          <div className="form">
            <form method="post" action="../../backend/login">
              <input type="text" name="userid" placeholder="User Name" required />
              <br />
              <br />
              <input type="password" name="password" placeholder="Password" required />
              <br />
              <br />
              <input id="btn" type="submit" value="Login" />
              <br />
              <p><br />
                Don't have an account ?
                <Link to="/Signup">
                  Register now
                </Link>
              </p>
              <p>
                <a href="forgot.html">Forgot Password ?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
