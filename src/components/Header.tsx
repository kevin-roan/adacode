import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { CustomDrawer, MiniHeader } from ".";

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
        </>
      )}
    </>
  );
}

export default Header;
