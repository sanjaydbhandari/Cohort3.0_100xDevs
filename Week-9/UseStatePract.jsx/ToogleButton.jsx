import React, { useState } from "react";

const ToogleButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <label htmlFor="visibility">
        <input
          type="checkbox"
          name="visibility"
          id="visibility"
          onClick={() => setIsVisible((prev) => !prev)}
        />
        {isVisible ? "Checked" : "UnChecked"}
      </label>
    </div>
  );
};

export default ToogleButton;
