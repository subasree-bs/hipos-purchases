import React, { useState } from "react";
import { Box, AccordionSummary,Accordion,AccordionDetails, Typography, Grid, Checkbox, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import Suppliertable from './ListTable';
import Sidebar from '../../../header/Sidebar';
import EditIcon from '@mui/icons-material/Edit';

function Supplierlisttable() {

  // *** Filter Text Field ****//
  const [filtersupForm, setFiltersupForm] = useState({ status: "", });
  // Accordion Expand
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => { setExpanded(newExpanded ? panel : false); };

  return (
      <Box sx={userStyle.container}>
        { /* ****** Header Content ****** */ }
        <Typography  sx={userStyle.HeaderText}>Suppliers  <Typography  sx={userStyle.SubHeaderText}>Manage your Suppliers</Typography></Typography>           
        { /* ****** Filter Start ****** */ }
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color: 'rgb(94, 53, 177) !important',}}><FilterAltIcon /> Filter</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography><br />                  
              { /* ****** Filter Content Start ****** */ }
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={3} lg={3}>
                  <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Purchase Due
                </Grid>
                <Grid xs={12} sm={6} md={3} lg={3}>
                  <Checkbox ria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Purchase Return
                </Grid>
                <Grid xs={12} sm={6} md={3} lg={3}>
                  <Checkbox ria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Purchase Balance
                </Grid>
                <Grid xs={12} sm={6} md={3} lg={3}>
                  <Checkbox ria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Opening Balance
                </Grid>
                <Grid  xs={12} sm={6} md={3} lg={3} sx={{marginLeft: '15px'}}><br />
                  <FormControl size="small" fullWidth >
                    <InputLabel id="demo-select-small">Status</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Status"
                        value={filtersupForm.status}
                        sx={{'& .MuiOutlinedInput-notchedOutline': {
                              border: '1px solid #B97DF0',
                            },}}
                        onChange={(event) => { setFiltersupForm({ ...filtersupForm, Status: event.target.value }) }}
                    >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              { /* ****** Filter Content End ****** */ }
            </Typography>
          </AccordionDetails> 
        </Accordion><br />
        { /* ****** Filter End ****** */ }
        { /* ****** Table Start ****** */ }
        <Suppliertable />
        { /* ****** Table End ****** */ }
        
      </Box>
   );
 }

function Supplierlist(){
    return(
        <Box sx={{display:'flex',}} >
          <Sidebar />
          <Box sx={{ width: '100%',overflowX: 'hidden' }}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Supplierlisttable />
            </Box>
          </Box>
      </Box>
    );
}

export default Supplierlist;
