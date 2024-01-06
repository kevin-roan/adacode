import {
  FaPinterestSquare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h1>ADACODE</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <h4 className="text-xl font-bold">Follow us on</h4>
        <span className="social_icon">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaPinterestSquare />
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Services</h3>
        <ul>
          <li> Web Developement </li>
          <li> UI/UX Design </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> UI/UX Design </li>
          <li> Robotics </li>
          <li> Android Developement </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Courses</h3>
        <ul>
          <li> Web Developement </li>
          <li> UI/UX Design </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> UI/UX Design </li>
          <li> Robotics </li>
          <li> Android Developement </li>
        </ul>
      </div>
      <div>
        <h3>Subscribe</h3>
        <input placeholder="Enter your email" className="email_input" />
        <button className="button_dark">Subscribe Now</button>
      </div>
    </div>
  );
}

export default Footer;
