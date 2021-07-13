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
import HooksExample from './components/HooksExample'
import Home from './components/Navigation/Home'
import About from './components/Navigation/About'
import Dashboard from './components/Navigation/Dashboard'
import { Router, Route  } from 'react-router'

function App() {
  
  return (
    <div className="App">
    <Router>
    <div>  <li>Home</li></div>
    <div>  <li>About</li></div>
    <div>  <li>Dashboard</li></div>
    <switch>
      <Route  path="/Home">Home</Route>
      <Route  path="/About">About</Route>
      <Route  path="/Dashboard">Dashboard</Route>
    </switch>
  </Router>
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