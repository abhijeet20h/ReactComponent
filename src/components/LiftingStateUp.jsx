import ReactDOM from "react-dom";
import React, { useState } from "react";

function LiftingStateUp(){
    const [temp, updateTemp] = useState({ f: 0, c: 0 })
  
    const updateC = ev => updateTemp({
      c: ev.target.value,
      f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
    })
    
    const updateF = ev => updateTemp({
      c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
      f: ev.target.value
    })
  
    return(
      <div id="container" >
        <div id="box1" className="alert-dark mt-2">
          <h2>Celsius</h2>
          <input
              type = "number"
              value = {temp.c}
              onChange = {updateC} >
            </input>
        </div>
        <div id="box2 " className="alert-secondary ">
            <h2>Fahrenheit</h2>
            <input
              type = "number" 
              value = {temp.f} 
              onChange = {updateF}>
            </input>
            </div>
      </div>
    )
  }
  
  ReactDOM.render(
    <LiftingStateUp />,
    document.getElementById("root")
  )

  export default LiftingStateUp;
