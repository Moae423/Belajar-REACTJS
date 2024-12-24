import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(`Render Counter ke ${counter}`);
  function handleClick() {
    setCounter(counter + 3);
    console.log(counter);
  }
  return (
    <div>
      <p>Counter : {counter} </p>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
}
