import React from 'react';
import { Button, Grid ,Box,Typography,Badge,Table,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaTrash,FaFileExcel,FaPrint,FaFilePdf,FaEdit} from 'react-icons/fa'
import $ from 'jquery';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';
import { userStyle } from '../../PageStyle';
import { Link } from 'react-router-dom';

//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#barcode').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const Barcodelisttable = ()=>{
    return(

        <Box sx={userStyle.container}>
          <Typography  sx={userStyle.HeaderText}>Barcodes <Typography  sx={userStyle.SubHeaderText}>Manage your barcode settings</Typography></Typography>
            <Box sx={userStyle.container}><br />
                    <Box>
                    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                      <Typography sx={userStyle.importheadtext}>All your barcode settings</Typography>
                      <Link to="/settings/barcode/create" style={{textDecoration:'none', color: 'white'}}><Button sx={userStyle.buttonadd}>Add new setting</Button></Link>
                      <Grid sx={{textAlign:'center'}}>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint/> Print&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                      </Grid>
                        <Table aria-label="customized table" id="orders" sx={{margin:'20px'}}>
                       
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="left">Sticker Sheet setting Name</StyledTableCell>
                                <StyledTableCell align="left">Sticker Sheet setting Description</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell align="left">Defaut&ensp;&ensp;&ensp;&ensp;<Badge badgeContent={'Default'} color="success"/> </StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left">
                                  <Link to="/settings/barcode/edit" style={{textDecoration:'none', color: 'white'}}><Button variant="contained" size='small' sx={userStyle.buttonedit}><FaEdit/>&ensp;EDIT</Button>&ensp;</Link>
                                 <Button variant="contained" size="small" sx={userStyle.buttondelete}><FaTrash></FaTrash>&ensp;Delete</Button>&ensp;
                                 <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}>Default</Button>
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

function Barcodelist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Barcodelisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Barcodelist;