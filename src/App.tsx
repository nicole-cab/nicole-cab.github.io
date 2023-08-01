import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="skills" Component={Skills} />
        <Route path="projects" Component={Projects} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
