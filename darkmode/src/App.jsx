import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Fotter from "./components/Fotter";


const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div>
      <Navbar dark={dark} setdark={setDark} />
      <Section dark={dark} setdark={setDark} />
      <Fotter dark={dark}  />
    </div>
  );
};

export default App;
