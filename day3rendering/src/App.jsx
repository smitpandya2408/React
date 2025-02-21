import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("rendering");

  // function handle() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <p style={{ color: "red" }}>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
