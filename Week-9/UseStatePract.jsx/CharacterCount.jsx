import React, { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Character Count : {count} </p>
      <input type="text" onChange={(e) => setCount(e.target.value.length)} />
    </div>
  );
};

export default CharacterCount;
