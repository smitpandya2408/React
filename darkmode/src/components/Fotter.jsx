

const Fotter = ({ dark }) => {

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
      Footer
    </div>
  );
};

export default Fotter;
