import { CourseCard } from "../components";

function Courses() {
  return (
    <div className="course_container">
      <div className="course_header">
        <h1>
          Check Out Our Latest <span>Courses</span>
        </h1>
      </div>
      <div className="course_card_wrapper">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
