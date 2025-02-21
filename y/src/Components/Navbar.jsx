const Navbar = () => {
  return (
    <header>
      <nav>
        <ul style={{display:"flex",justifyContent:"space-between"}}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>

            <button style={{backgroundColor:"red"}}>Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
