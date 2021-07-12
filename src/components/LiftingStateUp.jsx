import ReactDOM from "react-dom";
import React, { useState } from "react";

function LiftingStateUp() {
  const [temp, setTemp] = useState({ f: 0, c: 0 });

  const updateC = (ev) =>
    setTemp({
      c: ev.target.value,
      f: (ev.target.value * 9) / 5 + 32,
    });

  const updateF = (ev) => {
    setTemp({
      c: ((ev.target.value - 32) * 5) / 9,
      f: ev.target.value,
    });
    // console.log({ updateF });
  };

  return (
    <div id="container">
      <div id="box1" className="alert-dark mt-2">
        <h2>Celsius</h2>
        <input value={temp.c} onChange={updateC}></input>
      </div>
      <div id="box2 " className="alert-secondary ">
        <h2>Fahrenheit</h2>
        <input value={temp.f} onChange={updateF}></input>
      </div>
    </div>
  );
}

ReactDOM.render(<LiftingStateUp />, document.getElementById("root"));

export default LiftingStateUp;
