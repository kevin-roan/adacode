import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { CustomDrawer, MiniHeader } from ".";
import { Link } from "react-router-dom";

function Header() {
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100,
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive ? (
        <CustomDrawer />
      ) : (
        <>
          <MiniHeader />
          <div className="header_contianer">
            <div>
              <h1>ADACODE</h1>
            </div>
            <div className="nav_link_container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="header_end">
              <button className="button_light">
                <Link to="/contact">Contact Us</Link>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
