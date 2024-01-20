import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaLocationArrow,
  FaClock,
} from "react-icons/fa";
import {Link} from 'react-router-dom'

function MiniHeader() {
  return (
    <div className="mini_header">
      <div className="left">
        <p>
          <FaClock />
          Working: Monday - Friday.9:am-5:pm
        </p>
        <p>
          <FaLocationArrow /> Kozhikode, Kerala
        </p>
      </div>
      <div className="right">
        <Link to="/admin/">
          <FaUser />
          Login/Register
        </Link>
        <div className="logo_contianer">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}

export default MiniHeader;
