import React from "react";
import "../styles/login.css";
// import Signup from "./Signup";


function Login() {
  return (
    <>

    
      <div className="mainhead">
        <div className="header">
          <h1>LOGIN HERE</h1>
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
              <p>
                Don't have an account ?
                <a href="./Signup">
                  {/* <br /> */}
                  Register now
                </a>
              </p>
              <br />
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
