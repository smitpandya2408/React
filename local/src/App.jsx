import { useEffect, useState } from "react";

const App = () => {
  const [count, setcount] = useState(
    JSON.parse(localStorage.getItem("countdata")) || 0
  );

  useEffect(() => {
    localStorage.setItem("countdata", count);
  }, [count]);
  return (
    <div>
      <button disabled={count==0} onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(count - 1)}>count:{count}</button>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
