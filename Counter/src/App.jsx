import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(8);

  function addValue() {
    if (Counter === 20) {
      return;
    }
    setCounter(Counter + 1);
  }

  function removeValue() {
    if (Counter <= 0) {
      return;
    }
    setCounter(Counter - 1);
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>

        <h2>Counter : {Counter} </h2>

        <button
          onClick={addValue}
          style={{ backgroundColor: "green", margin: "15px" }}
        >
          Add
        </button>
        <button onClick={removeValue} style={{ backgroundColor: "red" }}>
          Remove
        </button>
      </div>
    </>
  );
}

export default App;
