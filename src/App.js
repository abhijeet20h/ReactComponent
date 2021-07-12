import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Test from "./components/Test";
import Toao from "./components/Toao";
import Count from "./components/count";
import MapMethod from "./components/MapMethod";
import ListKeys from "./components/ListKeys";
import Counterex from "./components/Counterex";
import ToggleButton from "./components/ToggleButton";
import "./App.css";
import LiftingStateUp from "./components/LiftingStateUp";
import ContextExample from "./components/ContextExample/ContextExample";
function App() {
  return (
    <div className="App">
      <ContextExample />
    </div>
  );
}

export default App;

// <Header />
// <div style={{ display: "flex" }}>
//   <div className="mx-auto">
//     <Counterex />
//     <Test />
//   </div>

//   <div className="mx-auto ">
//   <ListKeys/>
//   <LiftingStateUp/>
//   </div>
// </div> 
// /* <MapMethod />
// <Counterex />
//  <ToggleButton/> */