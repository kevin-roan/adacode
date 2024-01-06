import { FaArrowRightLong } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

function CoureCard() {
  return (
    <div className="course_card_contianer">
      <RiFlutterFill className="course_logo" />
      <h3>Machine Learning</h3>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <button className="button_dark">
        View Details
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default CoureCard;