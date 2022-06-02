import { useState } from "react";

function Counter() {
  const [result, setResult] = useState(0);

  function handleClick() {
    setResult(result + 1);
  }

  return (
    <div>
      <p>Result: {result} </p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Counter;
