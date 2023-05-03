import React, { useState } from "react";
import "./style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("current user", user.uid);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Login</h2>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            id="email"
            name="email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="password"
            name="password"
          />
          <button type="submit" onClick={(e) => submitLogin(e)}>
            Log In
          </button>
        </form>
          <a href="/signup"><p>Don't have an account? Register here</p></a>
      </div>
    </div>
  );
};
