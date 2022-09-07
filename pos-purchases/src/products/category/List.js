import React from 'react';
import { Button, Grid ,Typography } from '@mui/material';
// dialogbox
import { StyledTableRow, StyledTableCell} from '../../Table';
// inputfield
import Box from '@mui/material/Box';
//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaEdit,FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa';
import Sidebar from '../../../header/Sidebar';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import {ProductStyle} from '../ProductStyle';
import Categorycreate from './Create';
import Categoryedit from './Edit';

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

 
function Categorieslisttable (){
  
 return(
        <Box sx={ProductStyle.importProductsContainer}>
          { /* Card header */}
          <Typography  sx={ProductStyle.UnitHeaderText}>Categories <Typography  sx={ProductStyle.UnitSubHeaderText}>Manage your Categories</Typography></Typography>
            <Box sx={ProductStyle.ProductContainer}>
            { /* Card header text */}
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography sx={ProductStyle.boxheadertxt}>All Categories</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Categorycreate></Categorycreate>
                </Grid>
              </Grid>
              { /* Card buttons */}
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography  className=""></Typography>
                </Grid>
                <Grid item xs={7}>
                  <>
                    <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                    <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                    <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaPrint/> Print&ensp;</Button>
                    <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                  </>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid><br />
              { /* table start */}
              <Box>
                <TableContainer component={Paper} sx={ProductStyle.tablecontainer}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Category</StyledTableCell>
                        <StyledTableCell align="left">Category code</StyledTableCell>
                        <StyledTableCell align="left">Description</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                        <StyledTableCell align="left">HJGH567</StyledTableCell>
                        <StyledTableCell align="left">TEST</StyledTableCell>
                        <StyledTableCell align="left">           
                          <Categoryedit></Categoryedit>             
                          <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              { /* table end */}
            </Box>
        </Box>
 );
}

function Categorieslist(){
  return(
    <Box sx={{display:'flex', }} >
      <Sidebar />
      <Box sx={{width:'100%',overflowX:'hidden'}}>
        <Box component="main" sx={{ padding: '30px',}}><br /><br />
            <Categorieslisttable />
        </Box>
      </Box>
    </Box>
  );
}
export default Categorieslist ;

