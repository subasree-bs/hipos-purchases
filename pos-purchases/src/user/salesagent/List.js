import React,{useEffect} from 'react';
import { Button, Grid ,Typography } from '@mui/material';

// dialogbox
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { StyledTableRow, StyledTableCell} from '../../Table';

// inputfield
import Box from '@mui/material/Box';

// animation
import Zoom from '@mui/material/Zoom';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  FaEdit,FaEye, FaTrash ,FaPrint,FaFilePdf,FaFileCsv} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import { userStyle } from '../UserStyle';

import Salescreate from './Create';
import Salesedit from './Edit';
import Sidebar from '../../../header/Sidebar';

// TABLE THEME
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
  });


//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#salesagenttable').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

  // ****** Table Data ****** //
  function createData(name, email, contact_number, address, sales_comm, action) {
    return { name, email, contact_number, address, sales_comm, action };
}

const rows = [
    createData('sample', 'admin@gmail.com', '2453245', 'sample', 52),
];
 
function Saleslisttable(){
return(
        <Box sx={userStyle.importProductsContainer}>
          <Typography  sx={userStyle.UnitHeaderText}>Sales Commission Agents</Typography>
            <Box sx={userStyle.container}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={userStyle.boxheadertxt}></Typography>
                  </Grid>
                  <Grid item xs={4}>
                  <Salescreate />
                  </Grid>
                    
              </Grid>
              <Grid container sx={userStyle.grid_container}>
                        <Grid >
                            <Button sx={userStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={userStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={userStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={userStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                    <Box>
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="salesagenttable">
                        <TableHead>
                          <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
                                <StyledTableCell >Contact Number</StyledTableCell>
                                <StyledTableCell >Address</StyledTableCell>
                                <StyledTableCell >Sales Commission Percentage&ensp;(%)</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody align="left">
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                                    <StyledTableCell>admin@gmail.com</StyledTableCell>
                                    <StyledTableCell>987654321</StyledTableCell>
                                    <StyledTableCell>TEST</StyledTableCell>
                                    <StyledTableCell>10%</StyledTableCell>
                                    <StyledTableCell >
                                      <Grid>
                                            <Salesedit />
                                            <Button sx={userStyle.button_view}><FaEye />&ensp;View</Button>
                                            <Button sx={userStyle.button_delete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>

 
        </Box>


 );
              }

function Saleslist(){
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Saleslisttable />
            </Box>
        </Box>
    </Box>
    );
}

export default Saleslist;