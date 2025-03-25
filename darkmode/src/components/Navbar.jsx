import React from "react";

const Navbar = ({ dark, setdark }) => {
  return (
    <div
      style={{
        width: "1190px",
        height: "70px",
        backgroundColor: dark ? "black" : "aqua",
        color: dark ? "white" : "black",
        justifyContent: "space-between",
        display: "flex",
        padding: "0px 6%",
        alignItems: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>crypto m5</h1>
      <nav>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Blog</li>
          <button
            onClick={() => {
              setdark(!dark);
            }}
          >
            Darkmode
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
