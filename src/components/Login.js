import { paperClasses } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { userLogin } from "../actions/auth";
import amazon from "../assets/amazon.webp";
import { auth, db } from "../firebase";
import { connect, useDispatch } from "react-redux";

import "./login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth.user.uid);
        localStorage.setItem("token", auth.user.uid);
        const userData = {
          email,
          uid: auth.user.uid,
        };
        dispatch(userLogin(userData));
        navigate("/");
      })
      .catch((err) => {
        alert("No such User Found ");

        console.log(err);
      });
  };

  const register = () => {
    if (password.length < 6 || email == "") {
      alert("Please enter a strong password");
      return;
    }
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
      db.collection("users").add({
        email: email,
        name: email,
        uid: auth.user.uid,
        mobileNumber: "",
      });
    });
  };
  return (
    <div className="login">
      <img src={amazon}></img>
      <div className="container">
        <h1>Sign-in</h1>
        <div>
          {" "}
          <label>Email or mobile phone number</label>
          <br></br>
          <input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>Password</label>
          <br></br>
          <input
            type="password"
            required
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
        <button onClick={login}>Sign-in</button>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.{" "}
        </p>
        <button
          style={{
            backgroundColor: "rgb(233, 233, 233)",
            border: "1px solid black",
          }}
          onClick={() => register()}
        >
          Create a New amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
