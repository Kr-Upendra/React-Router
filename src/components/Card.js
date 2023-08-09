import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { slug, title, content } = props;
  console.log(slug);

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content.substring(0, 130)}</p>
      <Link className="rm" to={`/blogs/${slug}`}>
        Read More
      </Link>
    </div>
  );
}
