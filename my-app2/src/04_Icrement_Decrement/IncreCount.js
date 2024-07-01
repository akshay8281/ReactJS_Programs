import { useState } from "react"
import "./IncreCount.css"

function IncreCount() {

    let [counter, setCounter] = useState(0);

    let incrementCounter = () => {
        setCounter(counter + 1);
    };

    let decrementCounter = () => {
        setCounter(counter - 1);
    };

    let resetCounter = () => {
        setCounter(counter = 0);
    };

    return (
        <section>
            <div className="container">
                <div className="header">
                    <h1>Counter : {counter}</h1>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={incrementCounter}>Increament</button>
                    <button className="btn" onClick={decrementCounter}>Decrement</button>
                </div>
                <div>
                    <button className="btn" onClick={resetCounter}>Reset</button>
                </div>
            </div>
        </section>
    )




}

export default IncreCount