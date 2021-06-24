import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount]= useState(0);
  return (
    <div className="container">
      <button onClick= {()=>{
        setCount(count-1);
      }} className="btn">
        decrement
      </button>
      <div className="cnt">
        {count}
      </div>
      <button onClick= {()=>{
        setCount(count+1);
      }} className="btn">
        increment
      </button>
    </div>
  );
}

export default App;
