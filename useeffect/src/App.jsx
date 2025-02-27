import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setproduct] = useState(0,);
  
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setproduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("After rendering");

  return (
    <div className="main-container">
      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}>inc</button>

      {products &&
        products.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid black" }}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} height={"150px"} />
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;


