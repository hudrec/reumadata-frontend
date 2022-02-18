import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import './App.css';
import Login from "./scenes/Sign/Login";
import Home from "./scenes/Home";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
