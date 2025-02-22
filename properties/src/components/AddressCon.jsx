// import React from 'react'
import AddressCard from "./AddressCard";

const AddressCon = () => {
  return (
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <AddressCard city={"surat"} state={"gujarat"} country={"india"} />
      <AddressCard city={"goa"} state={"maharashtra"} country={"india"} />
      <AddressCard city={"Ahmedabad"} state={"gujarat"} country={"india"} />
      
      </div>    
  );
};
export default AddressCon;
