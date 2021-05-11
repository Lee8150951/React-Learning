import './App.css';
import Count from "./containers/Count";
import Person from "./containers/Person";
import React from "react";

function App() {
  return (
    <div className="App">
      <Count/>
      <hr/>
      <Person/>
    </div>
  );
}

export default App;
