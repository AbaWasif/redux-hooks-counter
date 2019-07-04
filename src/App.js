import React, { useEffect } from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
  useEffect(() => {
    console.log("This is my Counter App");
  });

  return (
    <div className="App">
      <header className="App-header wrapper">
        <Counter />
      </header>
    </div>
  );
}

export default App;
