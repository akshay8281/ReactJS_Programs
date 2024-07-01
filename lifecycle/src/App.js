import { useState } from "react";
import LifeCycle from "./LifeCycle";

function App() {

    const [change, setChange] = useState(false)
    const [isVisible,setIsvisible] = useState(true)
    return (
        <div>
            {isVisible == true && <LifeCycle address={change == true ? "Dholera" : "Dhandhuka"} /> }
            <button onClick={() => { setChange(true) }}>change</button>
            <button onClick={() => { setIsvisible (false)}}>Remove Component</button>
        </div>
    );
}

export default App;
