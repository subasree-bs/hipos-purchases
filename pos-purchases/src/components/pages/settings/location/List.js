import React from 'react';
import { Button, Grid ,Box,Typography ,Table,TableHead,TableContainer,TableBody,Paper} from '@mui/material';
import {FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa';
import {AiFillTool} from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import BusinessLocCreate from './Create';
import BusinessLocEdit from './Edit';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';


//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#BusinessLocation').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const Locationtable = ()=>{
    return(

        <Box>
          <Typography  sx={userStyle.HeaderText}>Business Locations <Typography  sx={userStyle.SubHeaderText}>Manage your business locations</Typography></Typography>
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography  sx={userStyle.importheadtext}>All your business locations</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessLocCreate></BusinessLocCreate>
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
                <TableContainer component={Paper} >
                      <Table aria-label="customized table" id="BusinessLocation" sx={{margin:'20px'}}>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Name:</StyledTableCell>
                                <StyledTableCell align="left">Location ID</StyledTableCell>
                                <StyledTableCell align="left">Landmark</StyledTableCell>
                                <StyledTableCell align="left">City</StyledTableCell>
                                <StyledTableCell align="left">Zip code</StyledTableCell>
                                <StyledTableCell align="left">State</StyledTableCell>
                                <StyledTableCell align="left">Country</StyledTableCell>
                                <StyledTableCell align="left">Price Group</StyledTableCell>
                                <StyledTableCell align="left">Invoice scheme</StyledTableCell>
                                <StyledTableCell align="left">Incoice layout for POS</StyledTableCell>
                                <StyledTableCell align="left">Incoice layout for Sale</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row"> XYZ </StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">CHENNAI</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">123</StyledTableCell>
                                <StyledTableCell align="left">    
                                <BusinessLocEdit></BusinessLocEdit>   &ensp;    
                                <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2PX'}}><AiFillTool size={16}></AiFillTool>&ensp;Settings</Button>
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}><FaTrash></FaTrash>&ensp;Deactivate Location</Button>
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

function Locationlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Locationtable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Locationlist;