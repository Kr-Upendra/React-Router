import React, { useState } from "react";
import { blogUrl } from "../../utils/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.post(blogUrl, {
        title,
        content,
      });
      alert("new blog add😎");
      navigate("/blogs");
    } catch (err) {
      alert("some error occure!");
    }
  };

  return (
    <div className="fb">
      <h3>Create New Blog</h3>
      <form onSubmit={addBlog}>
        <div className="ib">
          <label>Title</label>
          <input
            type="text"
            placeholder="Blog Title"
            required
            className="in"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ib">
          <label>Content</label>
          <textarea
            rows={5}
            placeholder="Blog Title"
            required
            className="in ta"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="sbb">
          <button className="sb">Add Blog</button>
        </div>
      </form>
    </div>
  );
}
