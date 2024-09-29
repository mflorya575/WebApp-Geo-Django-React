import logo from './logo.svg';
import './App.css';
import SecondComponent from './Components/SecondComponent';
import React from 'react';

function App() {
  function MyComponent() {
    return(
      <React.Fragment>
        <h1 className="myStyle">This is my first component</h1>;
        <p>This paragraph of this component</p>
        <li>This is a li tag</li>
        <div>
          <p>This is a paragraph</p>
          <p>This is an another paragraph</p>
        </div>
      </React.Fragment>
    )
  }
  return (
  <div>
    <h1>This is the app component</h1>
    <MyComponent />
    <SecondComponent />
  </div>
);
}

export default App;
