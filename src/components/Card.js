import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { _id, title, content } = props;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content.substring(0, 130)}</p>
      <Link className="rm" to={`/blogs/${_id}`}>
        Read More
      </Link>
    </div>
  );
}
