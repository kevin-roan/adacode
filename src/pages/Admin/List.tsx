import React from "react";

const List = ({ studentList }) => {
  return (
    <div className="studentlist_container">
      <table>
        <tr>
          <th>Id</th>
          <th>Student Name</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {studentList.map((item, index) => (
          <tr key={index}>
            <td>1</td>
            <td>{item.studentname}</td>
            <td>{item.phonenumber}</td>
            <td>Called</td>
            <td>
              <a href="tel:+91 6282710821">
                <button>Call Us</button>
              </a>
              <button>Whatsapp</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;
