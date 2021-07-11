import React, { useState } from "react";
import ReactDOM from "react-dom";

const ToggleButton = () => {
  const [isOff, setIsOff] = useState(true);

  return (
    <button
      className="btn btn-success m-4"
      style={{ width: "100px" }}
      onClick={() => setIsOff(!isOff)}
    >
      {isOff ? "ON" : "OFF"}
    </button>
  );
};

ReactDOM.render(<ToggleButton />, document.getElementById("root"));
export default ToggleButton;
