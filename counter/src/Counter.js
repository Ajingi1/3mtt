import { useState, } from 'react'
import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(prev => prev + 1);
    }
    const handleDecreament = () => {
        setCount(prev => {
            if (prev <= 0) {
              alert("Counter cannot go below 0");
              return 0;
            }
            return prev - 1;
          });
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div className="home">
            <h1>Counter</h1>
            <div className="counterContainer">
                <input type="number" className="counterDisplay" disabled value={count}/>
                <div className="buttons">
                    <button className="counterBtn" onClick={handleIncreament}>Increase</button>
                    <button className="counterBtn" onClick={handleDecreament}>Decrease</button>
                </div>
                <div className="controlBtns">
                    <button className="reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;