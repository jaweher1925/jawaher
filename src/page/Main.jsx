import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whattigmee,
  Header,
} from "../containers";
import { Artical, Brand, CTA, Navbar } from "../components";
import "../App.css";

import React from "react";

const Main = () => {
  return (
    <div className="App">
      <div className="gardient__bg">
        <Navbar />
        <Header />
        <Brand />
        <Whattigmee />
        <Features />
        <Possibility />
      </div>
    </div>
  );
};

export default Main;
