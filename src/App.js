import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import AddBlog from "./pages/admin/AddBlog";
import AdminLayout from "./components/AdminLayout";
import GetStats from "./pages/admin/GetStats";
import Dashboard from "./pages/admin/Dashboard";
import Alert from "./components/Alert";

export default function App() {
  const [alert, setAlert] = useState({});

  const sendAlert = (message, type) => {
    setAlert({
      message,
      type,
      isShow: true,
    });
    setTimeout(() => {
      setAlert({ ...alert, isShow: false });
    }, 3000);
  };

  return (
    <div className="app">
      <Router>
        <Alert alertMT={alert} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<Blog />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route
                path="addblog"
                element={<AddBlog showAlert={sendAlert} />}
              />
              <Route path="getStats" element={<GetStats />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
