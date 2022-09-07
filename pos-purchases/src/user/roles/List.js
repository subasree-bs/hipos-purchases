import React,{useEffect} from 'react';
import { Button, Grid ,Typography } from '@mui/material';

// dialogbox
import { styled } from '@mui/material/styles';
import { StyledTableRow, StyledTableCell} from '../../Table';
import Dialog from '@mui/material/Dialog';
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
import {  FaEdit, FaTrash ,FaPrint,FaFilePdf,FaFileCsv} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import { userStyle } from '../UserStyle';
import { Link } from '@mui/material';
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
    $('#example').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Roleslisttable(){
  return(
        <Box sx={userStyle.importProductsContainer}>
          <Typography sx={userStyle.UnitHeaderText}>Roles <Typography  sx={userStyle.UnitSubHeaderText}>Manage Roles</Typography></Typography>
            <Box sx={userStyle.container}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={userStyle.boxheadertxt}>All Roles</Typography>
                  </Grid>
                  <Grid item xs={4}>
                  <Button sx={userStyle.button_add}><Link to="/rolecreate" style={{textDecoration:'none', color: 'white'}}>Add</Link></Button>

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
                    <br />
                    <Box>
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                        <TableHead>
                          <TableRow>
                              <StyledTableCell sx={{width: '600px !important'}}>Roles</StyledTableCell>                                
                              <StyledTableCell>Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody align="left">
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Admin</StyledTableCell>                              
                            <StyledTableCell >
                              <Grid>
                                <Button sx={userStyle.button_edit}><Link to="/roleedit" style={{textDecoration:'none', color:'#fff'}}><FaEdit />&ensp;Edit</Link></Button>
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

function Roleslist(){
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Roleslisttable />
            </Box>
        </Box>
    </Box>
    );
}

export default Roleslist;