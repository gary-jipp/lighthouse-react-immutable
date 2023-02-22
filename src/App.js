import 'App.css';
import {useState} from "react";

export default function App() {
  console.log("App Component Rendering!");

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const increment = function() {
    setCount(count + 1);

    console.log("count=", count);

  };

  const onChange = function(event) {
    setInput(event.target.value);
  };

  const addItem = function(event) {
    // const newData = data.slice();
    // newData.push(input);
    // setData(newData);
    setData([...data, input]);  //  Immutable pattern
    setInput("");
  };

  const removeItem = function(text) {
    const newData = data.filter(item => {
      return item !== text;
    });
    setData(newData);
  };

  const itemList = data.map((item, i) => {
    return <li
      key={i}
      onClick={() => removeItem(item)}>
      {item}
    </li>;
  });

  return (
    <div className="App">
      <h2>My Friends</h2>

      <div>
        {count}
        <button onClick={increment}>+</button>
      </div>

      <input type="text" onChange={onChange} value={input} /><br />
      <button type="button" onClick={addItem}> Add Friend </button>

      <ul>{itemList}</ul>

    </div>
  );
}
