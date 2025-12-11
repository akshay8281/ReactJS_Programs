import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("8");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";

    if (charAllowed) str += " `~!@#$%^&*()_+-={}[]|\\:;'<>,.?/";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
   }, [password])

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg font-mono font-bold"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordClipboard} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password Length: {length}
          </label>
          <input
            type="range"
            value={length}
            min={"6"}
            max={"40"}
            className="w-full cursor-pointer outline-0"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => setNumAllowed((prev) => !prev)}
              className=" cursor-pointer"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className=" cursor-pointer"
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
