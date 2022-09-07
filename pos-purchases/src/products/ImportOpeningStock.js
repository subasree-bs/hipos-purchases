import React, {useEffect} from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { StyledTableRow, StyledTableCell} from '../Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';

import {ProductStyle} from './ProductStyle';
import Sidebar from '../../header/Sidebar';

function ImportOpeningStocktable() {
    return (
        <Box>
            <Typography sx={ProductStyle.UnitHeaderText}>Import Opening Stock</Typography>
            <Box sx={ProductStyle.ImportContainer}>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                <Button variant="contained" component="label" sx={{ textTransform: 'Capitalize',  backgroundColor: '#7009AB !important',color:'white'}}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize', backgroundColor: '#7009AB !important',color:'white'}}>Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize'}}><FaDownload/>&ensp;Download template file</Button>
            
        </Box><br />
        <Box sx={ProductStyle.ImportContainer}>
        <Typography sx={ProductStyle.importheadtext}>Instructions</Typography>
        <br />
        <Typography sx={ProductStyle.importsubheadtex}>Follow the instructions carefully before importing the file</Typography>
        <Typography sx={ProductStyle.importsubheadtext}>The columns of the file should be in the following order.</Typography>
        <br /><br />
        <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      // height:400,
      margin:'auto',
      overflow:'auto',
       "&::-webkit-scrollbar":{
        width:20
      },
      "&::-webkit-scrollbar-track":{
        backgroundColor:'pink'
      },
      "&::-webkit-scrollbar-thumb":{
        backgroundColor:'blue'
      }
    }} >
        <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell sx={ProductStyle.tableHead}>Column Number</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Column Name</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Instruction</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>SKU</Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Location  </Typography> <Typography>(Optional)</Typography></Box>	<Typography>If blank first business location will be used	</Typography></StyledTableCell>
                <StyledTableCell align="left">Name of the business location</StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Quantity </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Unit Cost (Before Tax)</Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Lot Number </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Expiry Date </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Stock expiry date in<Typography sx={ProductStyle.importTableBoldText}>Business date format mm/dd/yyyy </Typography></Typography> </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
    );
    
}

function ImportOpeningStock(){
  return(
    <Box sx={{display:'flex'}} >
    <Sidebar />
    <Box sx={{width:'100%',overflowX:'hidden'}}>
        <Box component="main" sx={{ padding: '30px',}}><br /><br />
          <ImportOpeningStocktable />
        </Box>
    </Box>
  </Box>
  );
}
export default ImportOpeningStock;