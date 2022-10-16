import React from "react";
import "../styles/signup.css";

function Signup() {
  return (
    <>
      <div className="header">
        <h1>SIGNUP HERE</h1>
      </div>
      <div className="login-page">
        <div className="form">
          <form method="post" action="../../../details">
            <input type="text" name="name" placeholder="Name" required />
            <br />
            <input type="text" name="age" placeholder="Age" />
            <br />
            <input type="email" name="email" placeholder="Email" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <br />
            <br />
            <br />
            <label>Security Question</label>
            <br />
            <input
              type="text"
              name="ans"
              placeholder="What is your Pet Name ?"
            />
            <br />
            <br />
            <br />
            <br />
            <input id="btn" type="submit" value="Sign Up" />
            <br />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
