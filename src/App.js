import logo from './logo.svg';
import './App.css';
import React from 'react';
let name = "World";

function App() {
  return (
    <>
     <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
     </nav>
     <div className="container">
        <h3>Hello {name}</h3>
        <p>Welcome To My World</p> 
      </div>
    </>
   );
}

export default App;
