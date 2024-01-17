import AdminSidebar from "./AdminSidebar"
import CourseTable from './CourseTable'

function ManageCourse() {
  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="manage_course_wrapper">
      <h2>Course Management</h2>
      <button>Add New Course</button> 
      <div className="course_list">
          <CourseTable />
          </div>
      </div>
    </div>
  )
}

export default ManageCourse
