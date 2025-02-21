const Fotter = () => {
  return (
    <footer >
      <ul style={{ display: "flex",justifyContent:"space-evenly" }}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Who us ?</li>
      </ul>

      <form>
        Name&nbsp;&nbsp;&nbsp;<input placeholder="Enter Your Name"></input>
        <br></br>
        Email &nbsp;&nbsp;<input placeholder="Enter Your Name"></input>
        <br></br>
        Contact<input placeholder="Enter Your Name"></input>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <button>Submit</button>
      </form>
    </footer>
  );
};
export default Fotter;
