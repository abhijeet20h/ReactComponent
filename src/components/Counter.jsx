import React, { useState } from "react";

// Importing app.css is css file to add styling

const Counter = () => {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div
      
    >
     
   

    <div
    style={{
        width:"400px",
        height: "200px",
        border: "1px solid",
    }} className="m-4">
         Counter App
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
        <button
         
          onClick={handleClick1}
        >
          Increment
        </button>
        <button
         
          onClick={handleClick2}
        >
          Decrement
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