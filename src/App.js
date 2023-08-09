import React from "react";
import "./style.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddBlog from "./pages/admin/AddBlog";
import AdminLayout from "./components/AdminLayout";
import GetStats from "./pages/admin/GetStats";
import Dashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<Blog />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="getStats" element={<GetStats />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
