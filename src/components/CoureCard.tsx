import { FaArrowRightLong } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

interface CourseCardProps {
  title: string;
  desc: string;
}

function CourseCard({ title, desc }: CourseCardProps) {
  return (
    <div className="course_card_contianer">
      <RiFlutterFill className="course_logo" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="button_dark">
        View Details
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default CourseCard;
