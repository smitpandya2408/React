import React, { useState } from "react";

const Section = ({ dark }) => {
  const [balance, setbalance] = useState(0);
  const [amount, setamount] = useState(0);

  const handleDeposit = () => {
    setbalance(balance + (+amount ));
    setamount("");
  };

  const handleWithdraw = () => {
    setbalance(balance - (+amount));
    setamount("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`w-[600px] p-6 shadow-md flex flex-col items-center space-y-4 transition-all duration-300 ${dark ? "bg-black text-white" : "bg-aqua text-black"}`}
      >
        <p className="text-lg font-bold">Balance: ${balance}</p>
        <input
          type="text"
          name="amount"
          placeholder="Enter your amount"
          className={`p-2 border rounded-md transition-all duration-300 ${dark ? "bg-white text-black" : "bg-gray-100 text-black"}`}
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
          onClick={handleDeposit}
        >
          Deposit
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>
    </div>
  );};

export default Section;
