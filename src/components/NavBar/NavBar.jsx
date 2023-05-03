import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const gotosignup = () => {
    window.location.href = "/signup";
  };
  const gotosignin = () => {
    window.location.href = "/login";
  };
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("current user");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="tigmee__navbar">
      <div className="tigmee__navbar-links_logo">
        <img src={logo} />
      </div>

      <div className="tigmee__navbar-links">
        <div className="tigmee__navbar-links">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#agenda">agenda</a>
          </p>
          <p>
            <a href="#contact">contact</a>
          </p>
        </div>
      </div>
      <div>
        {localStorage.getItem("current user") ? (
          <div className="tigmee__navbar-sign">
            <button onClick={(e) => LogOut(e)}>Sign out</button>
          </div>
        ) : (
          <div className="tigmee__navbar-sign">
            <button onClick={(e) => gotosignin(e)}>Sign in</button>
            <button onClick={(e) => gotosignup(e)}>Sign up</button>
          </div>
        )}
      </div>

      <div className="tigmee__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="tigmee__navbar-menu_container">
          <nav className="tigmee__navbar-menu">
            <ul className="side-nav">
              <li className="is-active">
                <span>
                  <a href="">Home</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="">Calender </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="">Agenda </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="">contact </a>
                </span>
              </li>
              <li>
                <span>
                  <a href=""> </a>
                </span>
              </li>
            </ul>
          </nav>
          <div className="tigmee__navbar-menu_container-links-sign">
          <button type="button">Sign in</button>
            <button type="button">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
