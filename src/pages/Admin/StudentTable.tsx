import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

const StudentTable = ({studentData}) => {
  console.log('studentdata',studentData);
  const [rowData, setRowData] = useState([
    { id: 1, name: 'Kevin Roan', phonenumber: 64950, action: true },
    { id: 2, name: 'kevinroan', phonenumber: 33850, action: false },
    { id: 3, name: 'Kevinraon', phonenumber: 29600, action: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: 'id' },
    { field: 'name' },
    { field: 'phonenumber' },
    { field: 'action' },
  ]);

  return (
    <div
      className={
        "ag-theme-quartz"
      }
      style={{ width: '100%', height: '100%' }}
    >
      <h3 style={{color:"var(--primary-color)", fontSize:'2rem',paddingBottom:'2rem'}}>Student List</h3>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default StudentTable;
