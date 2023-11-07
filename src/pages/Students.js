import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material'; 
import  Button  from '@mui/material/Button';
import {Link} from 'react-router-dom' 


function Students() {

  const columns = [
    { field: 'id', headerName: 'Sno', width: 50 },
    {
      field: 'roll_no',
      headerName: 'Roll No',
      width: 120,
      editable: false,
    },
    {
      field: 'full_name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'department',
      headerName: 'Branch',
      width: 70,
      editable: false,
    },
    {
      field: 'college',
      headerName: 'College',
      width: 90,
      editable: false,
    },
    
  ];
  
  const rows = [
    { id: 1, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 2, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 3, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 4, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 5, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 6, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 7, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
    { id: 8, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET'},
];
   
  

  return (
    <>
    <h1>Students</h1>  
    
    <Link to='/dashboard/user'>
     <Button variant='contained'
      sx={{ 
        width: 131,
        height: 42,
        borderRadius: 3,
        marginBottom: '3%'

      }} > New Student </Button>
     </Link>

  
     <Box sx={{ width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}
        disableRowSelectionOnClick
      />
    </Box>

    </>
  )
}

export default Students