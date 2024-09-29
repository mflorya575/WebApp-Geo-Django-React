import logo from './logo.svg';
import './App.css';
import SecondComponent from './Components/SecondComponent';
import React from 'react';

function App() {

  function AppleDisplay(num){
    if(num===0 || num===1){
      return `John has ${num} apple`
    } else if(num > 1){
      return `John has ${num} apples`
    } else {
      return 'Отрицательное число'
    }
  }

  return (
  <div>
    <h1>{AppleDisplay(-5)}</h1>
  </div>
);
}

export default App;
