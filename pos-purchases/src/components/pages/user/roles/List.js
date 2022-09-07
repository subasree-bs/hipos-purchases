import React from 'react';
import { Button, Grid ,Typography, Box, Table, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import { StyledTableRow, StyledTableCell} from '../../Table';
import {  FaEdit, FaTrash ,FaPrint,FaFilePdf,FaFileCsv} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import { Link } from 'react-router-dom';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';

//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Roleslisttable(){
  return(
        <Box >
          <Typography sx={userStyle.HeaderText}>Roles <Typography  sx={userStyle.SubHeaderText}>Manage Roles</Typography></Typography>
            <Box sx={userStyle.container}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography sx={userStyle.importheadtext}>All Roles</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Link to="/user/role/create" style={{textDecoration:'none', color: 'white'}}><Button sx={userStyle.buttonadd}>ADD</Button></Link>
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
                <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                    <TableHead>
                      <StyledTableRow>
                          <StyledTableCell sx={{width: '600px !important'}}>Roles</StyledTableCell>                                
                          <StyledTableCell>Action</StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody align="left">
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">Admin</StyledTableCell>                              
                        <StyledTableCell >
                          <Grid>
                            <Link to="/user/role/edit" style={{textDecoration:'none', color:'#fff'}}><Button sx={userStyle.buttonedit}><FaEdit />&ensp;EDIT</Button></Link>
                            <Button sx={userStyle.buttondelete}><FaTrash />&ensp;DELETE</Button>
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

function Roleslist(){
    return(
      <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Roleslisttable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    );
}

export default Roleslist;