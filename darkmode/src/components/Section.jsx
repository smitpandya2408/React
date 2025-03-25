import React, { useState } from "react";

const Section = ({ dark }) => {
  const [balance, setbalance] = useState(0);
  const [amount, setamount] = useState(0);

  const handleDeposit = () => {
    setbalance(balance + (+amount || 0));
    setamount("");
  };

  const handleWithdraw = () => {
    setbalance(balance - (+amount || 0));
    setamount("");
  };

  return (
    <div
      style={{
        width: "1190px",
        height: "70px",
        backgroundColor: dark ? "black" : "aqua",
        color: dark ? "white" : "black",
        display: "flex",
        padding: "0px 6%",
        alignItems: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >

<p>Balance: ${balance}</p>
      <input
        type="text"
        name="amount"
        placeholder="enter your amount"
        onChange={(e) => setamount(e.target.value)}
      ></input>
      <button onClick={handleDeposit}>deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Section;
