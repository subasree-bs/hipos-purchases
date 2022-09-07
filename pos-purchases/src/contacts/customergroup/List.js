import React from 'react';
import { Button, Grid ,Typography,Box,Table,TableBody,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import { StyledTableRow, StyledTableCell} from '../../Table';
import {FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa'
import $ from 'jquery';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { userStyle } from '../../PageStyle';
import CustomorGroupcreate from './Create';
import CustomorGroupedit from './Edit';

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
 
function CoustomerGroupsListtable(){
  return(
    <Box sx={userStyle.container}>
      <Typography  sx={userStyle.HeaderText}>Customer Groups <Typography  sx={userStyle.SubHeaderText}></Typography></Typography>
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
              <Grid item xs={8}>
                  <Typography  sx={userStyle.importheadtext}>All Customer Groups </Typography>
              </Grid>
              <Grid item xs={4}>
                <CustomorGroupcreate></CustomorGroupcreate>
              </Grid>                 
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Typography  className=""></Typography>
            </Grid>
            <Grid item xs={7} >
              <>
                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint/> Print&ensp;</Button>
                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
              </>
            </Grid>
            <Grid item xs={2}> </Grid>
        </Grid>
          <br />
          {/* ****** Table Box ****** */}
        <Box>
          <TableContainer component={Paper}>
            {/* ****** Table Start ****** */}
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Customer Group Name</StyledTableCell>
                  <StyledTableCell align="left">Calculation Percentagge(%)</StyledTableCell>
                  <StyledTableCell align="left">Selling Price Group</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                 <StyledTableRow>
                    <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                    <StyledTableCell align="left">TEST</StyledTableCell>
                    <StyledTableCell align="left">No</StyledTableCell>
                    <StyledTableCell align="left">          
                      <CustomorGroupedit></CustomorGroupedit>
                      <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
            {/* ****** Table End ****** */}
          </TableContainer>
        </Box>
        {/* ****** Table Box End ****** */}
      </Box>
    </Box>
  );
 }
function CoustomerGroupsList(){
  return(
    <Box sx={{display:'flex', width:'100%', alignContent: 'space-between',justifyContent: 'space-evenly', overflowX: 'hidden',}} >
      <Sidebar />
      <Box sx={{ width: '100%' }}>
          <Box component="main" sx={{ padding: '30px',}}><br /><br />
            <CoustomerGroupsListtable /><br /><br />
            <Footer/>
          </Box>
      </Box>
    </Box>
  );
 }
export default CoustomerGroupsList;
