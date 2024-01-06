import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <div className="header_contianer">
      <div>
        <h1>ADACODE</h1>
      </div>
      <div className="nav_link_container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="header_end">
        <button className="button_light">
          Contact Us
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default Header;
