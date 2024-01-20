import {doc,deleteDoc} from 'firebase/firestore';
import {db} from '../../Helpers/firebaseFirestore.js'

const StudentTable = ({ studentList }) => {
  const handleDelete = async(item) => {
    console.log('Delete button clicked');
    await deleteDoc(doc,(db,"students","6282710821"))
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList &&
            studentList.map((item, index) => (
              <tr key={index}>
                <td>{item.studentname}</td>
                <td>{item.phonenumber}</td>
                <td>
                  <button onClick={()=>handleDelete(item)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
