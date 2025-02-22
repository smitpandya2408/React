// import React from 'react'

// import { use } from "react"

const ProductCard = ({ username, email, pass }) => {
  return (
    <div>
      <h2>Name :{username}</h2>
      <p>Email :{email} </p>
      <p>Password:{pass}</p>
    </div>
  );
};

export default ProductCard;
