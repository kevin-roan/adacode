import { CourseCard } from "../components";
import coursesData from "../assets/courses.json";

function Courses() {
const CourseDownloader = (filename) => {
  
const fileUrlRegex = /^[a-zA-Z0-9-]+$/;


    if (!fileUrlRegex.test(filename)) {
      console.error('Invalid filename format');
      return;
    }


    const fullFilename = `/${filename}.pdf`;

  const fileUrl = fullFilename;
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "coursedetails.pdf";
  link.click();
};
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
            downloadCourse={()=>CourseDownloader(course.filename)}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
