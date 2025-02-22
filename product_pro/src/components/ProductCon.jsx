
//  import React from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard';
 
 const ProductCon = () => {

    const [productdates, setdata]=useState([]);

    function handle(){
        setdata([{
            username:"smith",
            email:"smith@gmail.com",
            password:"abc"

        },
        {

       
        username:"dhruv",
        email:"dhruv@gmail.com",
        password:"abc123" }
    ])
    }
   return (
    <div>
        <button onClick={handle}>Add Product</button>
        {productdates.map((element, index) => {
        return (
          <ProductCard
            key={index}
            username={element.username}
            email={element.email}
            password={element.password}
          />
        );
      })}
      
    </div>
   );
 }
 
 export default ProductCon