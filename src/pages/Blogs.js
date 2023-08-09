import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { paginate } from "../utils/paginate";
import { blogUrl as url } from "../utils/urls";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(url);
        setBlogs(response.data.doc.blogs);
      } catch (err) {
        console.error(err);
        alert("some error occured!");
      }
    };

    getBlogs();
  }, []);

  const [pagiState, setPagiState] = useState({
    currentPage: 1,
    count: blogs.length,
    itemsPerPage: 4,
  });

  const cardElement = blogs.map((item) => {
    return <Card key={item._id} {...item} />;
  });

  const handlePageChange = (page) => {
    setPagiState({ ...pagiState, currentPage: page });
  };

  const cards = paginate(
    cardElement,
    pagiState.currentPage,
    pagiState.itemsPerPage
  );

  return (
    <>
      <div className="cards">{cards}</div>
      <Pagination
        itemsCount={pagiState.count}
        itemPerPage={pagiState.itemsPerPage}
        currentPage={pagiState.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
