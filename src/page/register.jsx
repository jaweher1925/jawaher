import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./style.css";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userId = user.uid;
        localStorage.setItem("current user", user.uid);
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          email: email,
        });
        window.location.href = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TIGMEE </span>
        <span className="title">register</span>
        <form>
          <input
            type="text"
            placeholder="display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="file" />
          <button type="submit" onClick={(e) => signIn(e)}>
            sign up
          </button>
        </form>
        <a href="/login">
            <p> you have an acount ? Login</p>
        </a>
      </div>
    </div>
  );
};

export default Register;
