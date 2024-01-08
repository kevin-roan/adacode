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
      <div className="mobile_nav">
        <h1>ADACODE</h1>
        <button onClick={toggleDrawer} className="drawer_button">
          <RxHamburgerMenu />
        </button>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="mobile_dawer">
          <h1>ADACODE</h1>
          <div className="">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="">
            <button className="">
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
