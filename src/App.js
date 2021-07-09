
import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Test from './components/Test';
// import Toao from './components/Toao';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App" >

     <Header/>
     <div  style={{ display:'flex'}}> 

     <div className="mx-auto"> 
     <Counter/>
     <Test/>
    </div>

    <div className="mx-auto ">
    <Table/>
    </div>
   
    </div>
    </div>
  );
}

export default App;
