import React from 'react';
import { Button, Grid ,Box,Typography ,Table,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai'
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import TaxCreate from './taxrate/Create';
import TaxEdit from './taxrate/Edit';
import TaxGrpCreate from './taxgroup/Create';
import TaxGrpEdit from './taxgroup/Edit';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';

//  JQUERY 
$(document).ready(function () {
  setTimeout(function(){
  $('#taxrate').DataTable({
    language: {search: '', searchPlaceholder: "Search..."},
    lengthMenu: [25, 50, 100, 200, 500, 1000],
    // overflow-X: true
  });
   } ,1000);
});

//  JQUERY 
$(document).ready(function () {
  setTimeout(function(){
  $('#taxrategroup').DataTable({
    language: {search: '', searchPlaceholder: "Search..."},
    lengthMenu: [25, 50, 100, 200, 500, 1000],
    // overflow-X: true
  });
   } ,1000);
});

const Taxratelisttable = ()=>{
    return(
        <>    <Typography  sx={userStyle.HeaderText}>Tax Rates  <Typography  sx={userStyle.SubHeaderText}>Manage your tax rates</Typography></Typography>
              <Box sx={userStyle.container}>
                  <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography  sx={userStyle.importheadtext}>All your tax rates</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <TaxCreate></TaxCreate>
                        </Grid>
                          
                    </Grid>
                          <Grid container spacing={2}>
                              <Grid item xs={3}>
                                  <Typography  className=""></Typography>
                              </Grid>
                              <Grid item xs={7}>
                              <>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint/> Print&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                              </>
                              </Grid>
                              <Grid item xs={2}>
                           
                              </Grid>
                          </Grid>
                          <br />
                          <Box>
                          <TableContainer component={Paper} sx={userStyle.container}>
                            <Table sx={{ margin:'20px'}} aria-label="customized table" id="taxrate">
                              <TableHead>
                                <StyledTableRow>
                                  <StyledTableCell>Name:</StyledTableCell>
                                  <StyledTableCell align="left">Tax Rate %</StyledTableCell>
                                  <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                              </TableHead>
                              <TableBody>
                                 <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                                    <StyledTableCell align="left">No</StyledTableCell>
                                    <StyledTableCell align="left">    
                                         <TaxEdit></TaxEdit>&ensp;                 
                                      <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                                    </StyledTableCell>
                                  </StyledTableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
      
                          </Box>
                  </Box>
              <br />
                  <Box sx={userStyle.container}>
                  <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography  sx={userStyle.importheadtext}>Tax groups ( Combination of multiple taxes ) &ensp; <FcInfo/></Typography>
                        </Grid>
                        <Grid item xs={4}>
                              <TaxGrpCreate></TaxGrpCreate>
                        </Grid>
                          
                    </Grid>
                          <Grid container spacing={2}>
                              <Grid item xs={3}>
                                  <Typography  className=""></Typography>
                              </Grid>
                              <Grid item xs={7}>
                              <>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint/> Print&ensp;</Button>
                                  <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                              </>
                              </Grid>
                              <Grid item xs={2}>
      
                              </Grid>
                          </Grid>
                          <br />
                          <Box>
                          <TableContainer component={Paper} sx={userStyle.container}>
                            <Table sx={{ margin:"20px" }} aria-label="customized table" id="taxrategroup">
                              <TableHead>
                                <StyledTableRow>
                                  <StyledTableCell>Name:</StyledTableCell>
                                  <StyledTableCell align="left">Tax rate %</StyledTableCell>
                                  <StyledTableCell align="left">Sub taxes</StyledTableCell>
                                  <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                              </TableHead>
                              <TableBody>
                                 <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                                    <StyledTableCell align="left">Pc(s)</StyledTableCell>
                                    <StyledTableCell align="left">No</StyledTableCell>
                                    <StyledTableCell align="left">    
                                    <TaxGrpEdit></TaxGrpEdit>   &ensp;                 
                                      <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                                    </StyledTableCell>
                                  </StyledTableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
      
                          </Box>
                  </Box>
      
      </>
         );
}

function Taxratelist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Taxratelisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Taxratelist;