import { useState, useEffect } from "react";

export default function Posts() {
  //Navbar
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true); //reseting loader true
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      async (res) => {
        const data = await res.json(); //waiting for data format change to json
        setData(data);
        setLoading(false);
      }
    );
  }, [postId]);

  return (
    <div
      className="post-container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        width: "100vw",
        gap: "3rem",
        padding: "1rem",
      }}
    >
      <div className="buttons">
        <button
          onClick={() => {
            setPostId(1);
          }}
        >
          posts 1
        </button>
        <button
          onClick={() => {
            setPostId(2);
          }}
        >
          posts 2
        </button>
        <button
          onClick={() => {
            setPostId(3);
          }}
        >
          posts 3
        </button>
        <button
          onClick={() => {
            setPostId(4);
          }}
        >
          posts 4
        </button>
      </div>
      <div className="post-content">
        {loading ? "Loading..." : data && data.title}
      </div>
    </div>
  );
}
