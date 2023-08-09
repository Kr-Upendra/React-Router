import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { blogUrl as url } from "../utils/urls";

export default function Blog() {
  const params = useParams();
  const [blog, setBlog] = useState([]);
  console.log(params);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axios.get(`${url}/b/${params.slug}`);
        setBlog(response.data.doc.blog);
      } catch (err) {
        console.error(err);
        alert("some error occured!");
      }
    };

    getBlog();
  }, [params.slug]);

  return (
    <>
      {blog ? (
        <section className="blog">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tortor id aliquet lectus proin nibh nisl condimentum. Nulla facilisi
            cras fermentum odio eu feugiat. Vestibulum sed arcu non odio euismod
            lacinia at. Imperdiet sed euismod nisi porta lorem mollis. Posuere
            sollicitudin aliquam ultrices sagittis. Nunc mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Semper quis lectus nulla at
            volutpat diam ut venenatis tellus. Sed augue lacus viverra vitae
            congue eu. Vestibulum mattis ullamcorper velit sed ullamcorper morbi
            tincidunt. Sagittis id consectetur purus ut. Adipiscing at in tellus
            integer feugiat scelerisque. Augue interdum velit euismod in. Id
            volutpat lacus laoreet non curabitur gravida arcu ac. Varius sit
            amet mattis vulputate. Vitae ultricies leo integer malesuada nunc
            vel. Fusce id velit ut tortor pretium viverra suspendisse potenti.
            Sem integer vitae justo eget magna fermentum.
          </p>
          <p>
            Quam vulputate dignissim suspendisse in est ante in nibh mauris.
            Bibendum arcu vitae elementum curabitur vitae nunc sed. Purus non
            enim praesent elementum facilisis leo vel fringilla est. Purus sit
            amet luctus venenatis lectus magna fringilla. Nunc consequat
            interdum varius sit amet mattis vulputate. Faucibus in ornare quam
            viverra. Egestas sed tempus urna et pharetra pharetra massa. Auctor
            urna nunc id cursus metus aliquam eleifend mi. Aliquet nibh praesent
            tristique magna sit amet purus. Diam vel quam elementum pulvinar
            etiam non quam lacus. Vestibulum rhoncus est pellentesque elit. Nec
            nam aliquam sem et tortor consequat id porta nibh. Nulla at volutpat
            diam ut venenatis tellus in. Ut enim blandit volutpat maecenas
            volutpat.
          </p>
        </section>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}
