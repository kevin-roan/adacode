import AdminSidebar from "./AdminSidebar";
import React from "react";
import StudentTable from "./StudentTable.tsx";
import { db } from "../../Helpers/firebaseFirestore.js";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import List from "./List";

interface StudentDataProps {
  studentname: string;
  phonenumber: string;
}

function StudentList() {
  const [studentList, setStudentList] = useState<StudentDataProps[]>([]);
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const newStudentData: StudentDataProps[] = [];
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
        {/* 
        {studentList.length > 0 ? (
          <StudentTable studentList={studentList} />
        ) : null}
        */}
        {studentList.length > 0 ? <List studentList={studentList} /> : null}
      </div>
    </div>
  );
}

export default StudentList;
