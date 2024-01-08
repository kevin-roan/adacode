import { CourseCard } from "../components";
import coursesData from "../assets/courses.json";

function Courses() {
  return (
    <div className="course_container">
      <div className="course_header">
        <h1>
          Check Out Our Latest <span>Courses</span>
        </h1>
      </div>
      <div className="course_card_wrapper">
        {coursesData.courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            desc={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
