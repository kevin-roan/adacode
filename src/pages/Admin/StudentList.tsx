import AdminSidebar from "./AdminSidebar"
import StudentTable from './StudentTable.tsx'

function StudentList() {
  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="right_pane">
        <StudentTable />
      </div>
    </div>
  )
}

export default StudentList
