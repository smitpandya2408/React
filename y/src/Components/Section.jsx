import image from "../image/features1.jpg";

const Section = () => {
  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td>
              CryptoM5 Theme<br></br>
              CryptoM5 is a Bootstrap 5 theme created for trading agencies and
              cryptocurrency exchanges. Its understated appearance allows you to
              completely present specialized and complex information.
              <br></br>    <br></br>    <br></br>    <br></br>
              <button>Live Demo</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button>Buy Now</button>
            </td>
            <td colSpan="2">
              <img src={image}></img>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Section;
