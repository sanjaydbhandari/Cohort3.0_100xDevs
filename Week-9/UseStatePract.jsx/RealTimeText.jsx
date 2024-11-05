import { useState } from "react";

const RealTimeText = () => {
  const [text, setText] = useState("");
  return (
    <div className="RealTimeText">
      <div style={{ color: "green", background: "black" }}>
        <p>{text}</p>
      </div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default RealTimeText;
