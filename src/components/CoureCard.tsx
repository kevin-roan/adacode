import { FaArrowRightLong } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { useState } from "react";
import { Popup } from ".";

interface CourseCardProps {
  title: string;
  desc: string;
  downloadCourse:React.FC;
}

function CourseCard({ title, desc ,downloadCourse}: CourseCardProps) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="course_card_contianer">
      <RiFlutterFill className="course_logo" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="button_dark" onClick={handleClick}>
        View Details
        <FaArrowRightLong />
      </button>
      {showModal ? <Popup downloadCourse={downloadCourse} onClose={() => setShowModal(false)} /> : null}
    </div>
  );
}

export default CourseCard;
