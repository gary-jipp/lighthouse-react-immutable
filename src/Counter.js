import React, {useState} from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  console.log("Rendering Counter", counter);

  const increment = function() {
    setCounter(counter + 1);
  };
  const decrement = function() {
    setCounter(counter - 1);
  };
  const clear = function() {
    setCounter(0);
  };


  return (
    <div>
      {counter}
      <button onClick={increment}>+</button>
      <button onClick={clear}>0</button>
      <button onClick={decrement}>-</button>
    </div >
  );
}

export default Counter;