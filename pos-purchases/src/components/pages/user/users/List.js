import React from 'react';
import { Box, Table,TableBody, TableContainer,TableHead,Paper, Button, Grid ,Typography} from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import { Link } from 'react-router-dom';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';


//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#usertable').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


function Userslisttable(){
 return(
      <Box>
        {/* header text */}
        <Typography  sx={userStyle.HeaderText}>Users <Typography sx={userStyle.SubHeaderText}>Manage Users</Typography></Typography>
          {/* content start */}
          <Box sx={userStyle.container}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography sx={userStyle.importheadtext}>All your units</Typography>
              </Grid>
              <Grid item xs={4}>
                 <Link to="/user/user/create"  style={{textDecoration:'none', color: 'white'}}><Button sx={userStyle.buttonadd}>ADD</Button></Link>
              </Grid>
            </Grid>
            <Grid container sx={userStyle.gridcontainer}>
              <Grid >
                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
              </Grid>
            </Grid><br />
            <Box>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700,}} aria-label="customized table" id="usertable">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Username</StyledTableCell>
                      <StyledTableCell >Name</StyledTableCell>
                      <StyledTableCell >Role</StyledTableCell>
                      <StyledTableCell >Email</StyledTableCell>
                      <StyledTableCell >Action</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody align="left">
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                      <StyledTableCell >TEST</StyledTableCell>
                      <StyledTableCell >Admin</StyledTableCell>
                      <StyledTableCell >admin@gmail.com</StyledTableCell>
                      <StyledTableCell >
                        <Grid>
                          <Link to="/user/user/edit" style={{textDecoration:'none', color:'white',}}><Button sx={userStyle.buttonedit}><FaEdit />&ensp;EDIT</Button></Link>
                          <Button sx={userStyle.buttonview}><FaEye />&ensp;VIEW</Button>
                          <Button sx={userStyle.buttondelete}><FaTrash />&ensp;DELTE</Button>
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          {/* content end */}
      </Box>
    );
  }


function Userslist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Userslisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}
export default Userslist;