import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  function increment() {
    setCount(prev => {
      const newValue = prev + 1;
      setHistory(h => [...h, newValue]);
      return newValue;
    });
  }

  function decrement() {
    setCount(prev => {
      const newValue = prev - 1;
      setHistory(h => [...h, newValue]);
      return newValue;
    });
  }

  return (
    <div>

      <h1>Count: {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>History</h2>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Counter;