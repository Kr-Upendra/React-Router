import React from "react";
import "./style.css";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}
