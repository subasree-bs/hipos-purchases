import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button,TextField, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
    Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaMapMarker,FaSearch,FaUser,FaFileCsv, FaPrint, FaFilePdf,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
// DateRangePicker
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#PurchasePayment').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});



function Productpurchaselisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
<>
    <Box>
    <Typography sx={userStyle.HeaderText}>Product Purchase Report</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
            <AccordionDetails >
                <br /> 
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaSearch /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Supplier</InputLabel>
                                <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0px !important',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #B97DF0',
                                            borderRadius:'0px !important',
                                        },}}
                                        id="demo-select-small"
                                        label='Customer'
                                        // value={ProfitLoss.ProfitAddLocation}
                                        // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                         >
                                        <MenuItem value={1}>None</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons}><FaMapMarker /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Business Location</InputLabel>
                                <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0px !important',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #B97DF0',
                                            borderRadius:'0px !important',
                                        },}}
                                        id="demo-select-small"
                                        label='Customer'
                                        // value={ProfitLoss.ProfitAddLocation}
                                        // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                         >
                                        <MenuItem value={1}>Please Select</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                        </Grid>
                  </Grid> 
                  <br />
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
    <Box sx={userStyle.container}>     
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table aria-label="customized table" id="PurchasePayment">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="left">Product</StyledTableCell>
                                <StyledTableCell align="left">SKU</StyledTableCell>
                                <StyledTableCell align="left">Supplier</StyledTableCell>
                                <StyledTableCell align="left">Reference No</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Quantity</StyledTableCell>
                                <StyledTableCell align="left">Total Unit Adjusted</StyledTableCell>
                                <StyledTableCell align="left">Unit Purchase Price</StyledTableCell>
                                <StyledTableCell align="left">Subtotal</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell align="left">xyz</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>                           
                            </StyledTableRow>
                        </TableBody>
                        <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                            <StyledTableRow> 
                                <StyledTableCell sx={userStyle.footerStyle} colspan={5}>Total</StyledTableCell>
                                <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                                <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                                <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                                <StyledTableCell align="left"sx={userStyle.footerStyle}>??? 0.00</StyledTableCell>
                            </StyledTableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>                                  
              </Box>
  </>
    
    );
}

function Productpurchaselist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Productpurchaselisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Productpurchaselist;