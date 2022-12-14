
import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {userStyle} from '../../PageStyle';
import { FaFileCsv, FaPrint, FaCog,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../Table';

const Salesaddlist = ()=>{
    return(
     <>
       <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saleAdd">
                        <TableHead>
                            <StyledTableRow>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Invoice No.</StyledTableCell>
                            <StyledTableCell align="left">Customer name</StyledTableCell>
                            <StyledTableCell align="left">Location</StyledTableCell>
                            <StyledTableCell align="left">Payment status</StyledTableCell>
                            <StyledTableCell align="left">Total amount</StyledTableCell>
                            <StyledTableCell align="left">Total paid</StyledTableCell>
                            <StyledTableCell align="left">Total remaining</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                            <StyledTableCell align="left">XYZ</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left">???21.27</StyledTableCell>
                           </StyledTableRow>
                        </TableBody>
                        <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                            <StyledTableRow> 
                            <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={4}>Total</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}>??? 0.00</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}>??? 0.00</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}>??? 0.00</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerSmlTxtStyle}>Sell Due - ??? 0.00 <br /> Sell Return Due - ??? 0.00</StyledTableCell>
                        
                            </StyledTableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
     </>
    );
}

export default Salesaddlist;