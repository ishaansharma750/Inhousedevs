import React, { useState } from "react";
import flower from "../assets/flower.png";
import womb from "../assets/WOM.png";
import womb2 from "../assets/WOM2.png";
import mainPic from "../assets/womb.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = (e) => {
    let storage = {
      Email: `${email}@ihd.in`,
    };
    sessionStorage.setItem("data", JSON.stringify(storage));
  };
  return (
    <div>
      <div className="main-container">
        <div className="left">
          <img width={320} height={160} src={flower} alt="flower" />
          <div className="womb-pic">
            <img src={womb} alt="womb-pic" />
          </div>
          <div className="womb-pic">
            <img src={womb2} alt="womb-pic" />
          </div>
          <br />
          <div className="womb-pic">
            <div className="text">Login to your account</div>
          </div>
          <br />
          <div className="form">
            <input
              className="login-input"
              type="email"
              placeholder="Enter Email Address"
              name="emailAddress"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <div className="frgt">
            <a href="">Forgot Password</a>
          </div>
          <br />
          <button className="login-btn" onClick={handleForm}>
            Login
          </button>
        </div>
        <div className="right">
          <img height={680} width={895} src={mainPic} alt="mainPic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
