import React, { useState } from 'react';
import { Box,AccordionSummary,Accordion,AccordionDetails, Button, Grid, Menu, Divider, Typography, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableFooter } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter, FaTruck, FaFileMedicalAlt, FaMoneyBillAlt, FaCopy, FaUndo, FaEnvelope } from 'react-icons/fa';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';
import Salespayment from './Salespayment';

function Salelisttable() {
  
    //  JQUERY
    $(document).ready(function () {
      setTimeout(function () {
          $('#saletable').DataTable({
              language: { search: '', searchPlaceholder: "Search..." },
              lengthMenu: [25, 50, 100, 200, 500, 1000],
          });
      }, 1000);
  });

  // Filter
  // Filter Textarea
  const [salesForm, setSalesForm] = useState({
      salesFormBusinessLoc: "", salesFormCustomer: "", salesFormDate: "", salesFormUser: "", salesFormPayStatus: "",
      salesFormShipStatus: "",
  });

  // / Accordion expand
  const [expanded, setExpanded] = useState("panel1");
  const filterPanel = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
  };
  
  //*****Action button*****//
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
      <Box>
          <Typography sx={userStyle.HeaderText}>Sales</Typography>
          {/* Filter */}
          <Accordion expanded={expanded === 'panel1'} onChange={filterPanel('panel1')} sx={userStyle.container}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{color: 'rgb(94, 53, 177) !important',}}><FaFilter /> Filter</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography><br />
                  
                  { /* filter content start */ }
                  <Grid container spacing={5} sx={userStyle.textInput}>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small">Business Location</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={salesForm.salesFormBusinessLoc}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormBusinessLoc: e.target.value }) }}
            label="Business Location"
        >
            <MenuItem value="">All </MenuItem>
            <MenuItem value={1}>xxx</MenuItem>
            <MenuItem value={2}>yyy</MenuItem>
        </Select>
    </FormControl>
</Grid>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small">Customer</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={salesForm.salesFormCustomer}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormCustomer: e.target.value }) }}
            label="Customer"
        >
            <MenuItem value="">All </MenuItem>
            <MenuItem value={1}>xxx</MenuItem>
            <MenuItem value={2}>yyy</MenuItem>
        </Select>
    </FormControl>
</Grid>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small">Payment Status</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={salesForm.salesFormPayStatus}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormPayStatus: e.target.value }) }}
            label="Payment Status"
        >
            <MenuItem value="">All </MenuItem>
            <MenuItem value={1}>xxx</MenuItem>
            <MenuItem value={2}>yyy</MenuItem>
        </Select>
    </FormControl>
</Grid>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
            id="component-outlined"
            value={salesForm.salesFormDate}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormDate: e.target.value }) }}
            label=""
            type="date"
        />
    </FormControl>
</Grid>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small">User</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={salesForm.salesFormUser}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormUser: e.target.value }) }}
            label="User"
        >
            <MenuItem value="">All </MenuItem>
            <MenuItem value={1}>xxx</MenuItem>
            <MenuItem value={2}>yyy</MenuItem>
        </Select>
    </FormControl>
</Grid>
<Grid item md={3} sm={12} xs={12}>
    <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small">Shipping Status</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={salesForm.salesFormShipStatus}
            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormShipStatus: e.target.value }) }}
            label="Shipping Status"
        >
            <MenuItem value="">All </MenuItem>
            <MenuItem value={1}>xxx</MenuItem>
            <MenuItem value={2}>yyy</MenuItem>
        </Select>
    </FormControl>
</Grid>
<Grid item md={3} sm={6} xs={12}>
    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Subscriptions" />
    </FormGroup>
</Grid>
</Grid>
                  { /* filter content end */ }

                </Typography>
              </AccordionDetails> 
            </Accordion><br /> 
          <br />

          {/* Table */}
          <Box sx={userStyle.container}>
              <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography sx={userStyle.HeaderText}>All sales</Typography>
                  </Grid>
                  <Grid item xs={4}>
                      <Button sx={userStyle.buttonadd} ><Link to="/sell/salescreate" style={{ textDecoration: 'none', color: 'white' }}> Add </Link></Button>
                  </Grid>
              </Grid>
              <Grid container sx={userStyle.gridcontainer}>
                  <Grid >
                    <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
                    <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
                    <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
                    <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                  </Grid>
              </Grid>
              <Box>
                  <TableContainer component={Paper} >
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saletable">
                          <TableHead>
                              <TableRow>
                                  <StyledTableCell>Action</StyledTableCell>
                                  <StyledTableCell align="left">Date</StyledTableCell>
                                  <StyledTableCell align="left">Invoice No.</StyledTableCell>
                                  <StyledTableCell align="left">Customer Name</StyledTableCell>
                                  <StyledTableCell align="left">Contact Number</StyledTableCell>
                                  <StyledTableCell align="left">Location</StyledTableCell>
                                  <StyledTableCell align="left">Payment Status</StyledTableCell>
                                  <StyledTableCell align="left">Payment Method</StyledTableCell>
                                  <StyledTableCell align="left">Total Amount</StyledTableCell>
                                  <StyledTableCell align="left">Total Paid</StyledTableCell>
                                  <StyledTableCell align="left">Sell Due</StyledTableCell>
                                  <StyledTableCell align="left">Sell Return Due</StyledTableCell>
                                  <StyledTableCell align="left">Shipping Status</StyledTableCell>
                                  <StyledTableCell align="left">Total Items</StyledTableCell>
                                  <StyledTableCell align="left">Types of Service</StyledTableCell>
                                  <StyledTableCell align="left">Custom Field 1</StyledTableCell>
                                  <StyledTableCell align="left">Added By</StyledTableCell>
                                  <StyledTableCell align="left">Sell Note</StyledTableCell>
                                  <StyledTableCell align="left">Staff Note</StyledTableCell>
                                  <StyledTableCell align="left">Shipping Details</StyledTableCell>
                                  <StyledTableCell align="left">Table</StyledTableCell>
                                  <StyledTableCell align="left">Service Staff</StyledTableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              <StyledTableRow>
                                  <StyledTableCell component="th" scope="row">
                                  <div>
                                            <Button
                                               id="demo-customized-button"
                                               aria-controls={open ? 'demo-customized-menu' : undefined}
                                               aria-haspopup="true"
                                               aria-expanded={open ? 'true' : undefined}
                                               variant="contained"
                                               disableElevation
                                               onClick={handleClick}
                                               endIcon={<KeyboardArrowDownIcon />}
                                               size="small"
                                               sx={{backgroundColor: '#6420c0', textTransform: 'Capitalize'}}
                                            >
                                                Actions
                                            </Button>
                                            <Menu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleClose} disableRipple><FaEye />&ensp;View</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaEdit />&ensp;Edit</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaTrash />&ensp;Delete</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaTruck />&ensp;Edit Shipping</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaPrint />&ensp;Print Invoice</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaFileMedicalAlt />&ensp;Packing Slip</MenuItem>
                                          <Divider sx={{ my: 2 }} />
                                          <MenuItem onClick={handleClose} disableRipple><FaMoneyBillAlt />&ensp;View Payments</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaCopy />&ensp;Duplicate Sell</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaUndo />&ensp;Sell Return</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaEye />&ensp;Invoice URL</MenuItem>
                                          <MenuItem onClick={handleClose} disableRipple><FaEnvelope />&ensp;New Sale Notification</MenuItem>
                                            </Menu>
                                        </div>
                                  </StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left"><Salespayment /></StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                                  <StyledTableCell align="left">test</StyledTableCell>
                              </StyledTableRow>
                          </TableBody>
                          <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                            <TableRow className="table2_total" >
                                  <StyledTableCell
                                      colSpan={6}
                                      align="right"
                                      padding="250px"
                                      sx={{ fontWeight: 700, fontSize: 18, color: "black", alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                  >
                                      Total:{" "}
                                  </StyledTableCell>
                                  <StyledTableCell align="center" colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>Paid - 0</StyledTableCell>
                                  <StyledTableCell align="center" colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>Cash - 0</StyledTableCell>
                                  <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                  <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                  <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                  <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                                  <StyledTableCell colSpan={1}></StyledTableCell>
                              </TableRow>
                          </TableFooter>
                      </Table>
                  </TableContainer>
              </Box>
          </Box>
      </Box>
  );

}




const Salelist = () => {
  return (
    <>
      <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Salelisttable /><br /><br />
                <Footer />
            </Box>
        </Box>
    </Box>
    </>
  );
}

export default Salelist;