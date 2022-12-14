import React, { useState } from 'react';
import Sidebar from '../header/Sidebar';
import { Grid, Typography, Box, FormControl, InputLabel, Select, MenuItem  } from '@mui/material';
import { dashboardstyle } from './dashboardstyle';
import { SmartScreenSharp , DoDisturbOnSharp, PriorityHighSharp, PrivacyTipSharp } from '@mui/icons-material';

const Dashboardlayout = () => {
  const [location, setLocation] =  useState("");
  return(
    <Box>
    <Grid container>
      <Grid item sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',borderRadius: '10px', }}}>
        <Typography variant="h5" sx={{color: 'rgb(94, 53, 177)'}}>Welcome Admin</Typography><br />
        <Grid sx={dashboardstyle.headlocation}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-select-small">Select Location</InputLabel>
              <Select labelId="demo-select-small" id="demo-select-small" value={location} label="Select Location" onChange={(event) => {console.log(event.target.value); setLocation(event.target.value)}}>
                <MenuItem value={1}>Location 1</MenuItem>
                <MenuItem value={2}>Location 2</MenuItem>
                <MenuItem value={3}>Location 3</MenuItem>
              </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid><br />
    {/* Grid Layout for TOTAL  start*/}
    <Grid lg={12} item container spacing={{ xs: 3, sm: 3, md: 4, lg: 3}}>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Grid sx={dashboardstyle.container}>
          <Grid sx={dashboardstyle.conetntbox}>
            <Grid sx={dashboardstyle.contentboxicon}><SmartScreenSharp style={{fontSize: '52px', padding: '5px',backgroundColor: 'rgb(146 4 196)!important', marginTop: '2px',}} /></Grid>
            <span>TOTAL PURCHASE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Grid sx={dashboardstyle.containerOne}>
          <Grid sx={dashboardstyle.conetntbox}>
          <Grid sx={dashboardstyle.contentboxicon}><SmartScreenSharp style={{fontSize: '52px', padding: '5px',}} /></Grid>
            <span>TOTAL PURCHASE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Grid sx={dashboardstyle.containerTwo}>
          <Grid sx={dashboardstyle.conetntbox}>
            <Grid sx={dashboardstyle.contentboxicon}><PriorityHighSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
            <span>PURCHASE DUE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Grid sx={dashboardstyle.containerThree}>
          <Grid sx={dashboardstyle.conetntbox}>
            <Grid sx={dashboardstyle.contentboxicon}><PrivacyTipSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
            <span>INVOICE DUE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Grid sx={dashboardstyle.containerFour}>
          <Grid sx={dashboardstyle.conetntbox}>
            <Grid  sx={dashboardstyle.contentboxicon}><DoDisturbOnSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
            <span>EXPENSE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/* Grid Layout for TOTAL end */}
  </Box>
  );
}

const Dashboard = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
       <Sidebar />
        {/* Main Dashboard start */}
      <Box sx={{ width: '100%' }}>
       <Box component="main" sx={{ flexGrow: 1, padding: '30px',}}><br /><br />
        <Dashboardlayout />
       </Box>
      </Box>
      {/* Main Dashboard end */}
    </Box>
    </>
  )
}

export default Dashboard;