//  import React from 'react'

const AddressCard = ({ city, state, country }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid black",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h3>City:{city}</h3>
      <h3>State:{state}</h3>
      <h3>City:{country}</h3>
    </div>
  );
};

export default AddressCard;
