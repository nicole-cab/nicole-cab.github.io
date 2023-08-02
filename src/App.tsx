import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

import { Route, Routes, Navigate } from "react-router-dom";

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
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
