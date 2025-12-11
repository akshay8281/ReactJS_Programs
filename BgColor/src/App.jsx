import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen bg-green-300 py-8"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center font-bold text-3xl bg-green-500 py-4 px-4 rounded-2xl w-150 m-auto">
        BGColor Changer using React
      </h1>

      <div className="flex flex-wrap justify-center gap-8 bg-green-100 py-4 px-4 w-180 m-auto rounded-lg mt-8">
        <button
          className=""
          onClick={() => setColor("red")}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Red
        </button>
        <button
          className=""
          onClick={() => setColor("green")}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Green
        </button>
        <button
          className=""
          onClick={() => setColor("purple")}
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "5px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Purple
        </button>
        <button
          className=""
          onClick={() => setColor("orange")}
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "5px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Orange
        </button>
        <button
          className=""
          onClick={() => setColor("red")}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
