import logo from './logo.svg';
import './App.css';

function App() {
  function MyComponent() {
    return <h1>This is my first component</h1>;
  }
  return (
  <div>
    <h1>This is the app component</h1>
    <MyComponent />
  </div>
);
}

export default App;
