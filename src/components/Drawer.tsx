import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <RxHamburgerMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
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
      </Drawer>
    </>
  );
};

export default CustomDrawer;
