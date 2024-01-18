import AdminSidebar from "./AdminSidebar"
import StudentTable from './StudentTable.tsx'
import {db} from '../../Helpers/firebaseFirestore.js'
import {getDocs,collection} from 'firebase/firestore';
import {useEffect,useState} from 'react';

function StudentList() {
  const [studentList,setStudentList] = useState([])
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const newStudentData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // append all the data to the array
          newStudentData.push({
            studentname: data.studentname,
            phonenumber: data.phonenumber,
          });
        });
        setStudentList(newStudentData);
      } catch (e) {
        console.error("Error", e);
      }
    };
    fetchDocs();
  }, []);

  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="right_pane">
        <StudentTable studentsData={studentList}/>
      </div>
    </div>
  )
}

export default StudentList;
