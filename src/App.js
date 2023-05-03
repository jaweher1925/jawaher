import "./App.css";
import { Login } from "./page/login";
import Register from "./page/register";
import Main from "./page/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/signup" />
        <Route element={<Main />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
