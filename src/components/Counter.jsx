import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter - 1);
  };

  const handleClick2 = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "200px",
          border: "1px solid",
        }}
        className="m-4"
      >
        <div
          style={{
            fontSize: "120%",
            position: "relative",
            top: "10vh",
          }}
        >
          {counter}
        </div>
        <div className="buttons">
          <button onClick={handleClick1} className="btn btn-danger m-2">
            -
          </button>
          <button onClick={handleClick2} className="btn btn-success m-2">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

// style={{
//     fontSize: "60%",
//     position: "relative",
//     top: "20vh",
//     marginRight: "5px",
//     backgroundColor: "green",
//     borderRadius: "8%",
//     color: "white",
//   }}

// style={{
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "300%",
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     top: "-15%",
//   }}
