import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchPostApi = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      //   const data = await res.json();
      //   console.log(data);
      //   setPost(data);

      //   using axios

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setPost(res.data);
    };

    getPost();
  }, []);

  return (
    <PostComponent id={post.id} title={post.title} completed={post.completed} />
  );
};

const PostComponent = ({ id, title, completed }) => {
  return (
    <div className="postContainer" key={id}>
      <p>{title}</p>
      {completed ? "Done" : "pending"}
    </div>
  );
};

export default FetchPostApi;
