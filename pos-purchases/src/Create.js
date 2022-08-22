import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Divider,TextField,Typography,Container,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
   Menu,Tooltip,Toolbar,Table,TableBody,
   TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
   DialogContent,DialogActions,tableCellClasses} from "@mui/material";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";
import {Link} from "react-router-dom";
import {purchaseStyle, purchaseList} from "./PurchaseStyle";
import SearchIcon from '@mui/icons-material/Search';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function CustomizedAccordions() {

// Filter - All Select Inputs
const [purchaseAdd, setPurchaseAdd] = useState({BusinessLocation:"",})

  return (
    <Box>
        {/* ***** Title Start***** */}
        <Container sx={{ paddingTop: '10px' }}>
            <Typography variant="h5" >Add Purchase</Typography>
        </Container>
        <br />
        {/* ***** Title End***** */}

        <Container>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Box sx={{ typography: "body1" }}>    
                    <Container>            
                        <Grid container spacing={2}>
                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Business Location </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.BusinessLocation}
                                        label="Business Location"
                                        onChange={(event) => {
                                            setPurchaseAdd({...purchaseAdd, 
                                            BusinessLocation: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="">All</MenuItem>
                                            <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                                            <MenuItem value={"juiceria"}>Juiceria (1234567)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Container>
        <br />
        <br />
        <Container>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid container sx={{p:3}}>
                    <Grid item md={3}>
                    </Grid>
                    <Grid  item  md={6}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                        <Typography>
                            <Grid sx={{ fontSize: '24px', border: '1px solid #b97df0', width: '33px', height: '40px', 
                                borderRadius: '2px', backgroundColor: '#b97df0', color: '#fff' }}  ><SearchIcon />
                            </Grid>
                            <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                <TextField id="outlined-basic" label="Enter Product name / SKU / Scan bar code"
                                 variant="outlined" disabled size="small" />
                            </FormControl>
                        </Typography>
                    </Grid>
                    <Grid item md={3} align="center">
                        {/* <AddIcon /> */}
                       <Button variant="text"> + Add New Product </Button>
                    </Grid>
                    <br />
                    <TableContainer sx={{ }}>
                        <Table sx={{border:"0"}} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ color: "white",fontWeight: "600", fontSize: "14px", 
                                backgroundColor:"#7009AB",}}>
                                    <TableCell >#</TableCell>
                                    <TableCell >Product Name</TableCell>
                                    <TableCell >Purchase Quantity</TableCell>
                                    <TableCell >Unit Cost (Before Discount)</TableCell>
                                    <TableCell >Discount Percent</TableCell>
                                    <TableCell >Unit Cost (Before Tax)</TableCell>
                                    <TableCell >Line Total</TableCell>
                                    <TableCell >Profit Margin %</TableCell>
                                    <TableCell >Unit Selling Price (Inc. tax)</TableCell>
                                    <TableCell ><DeleteIcon /></TableCell>
                                </TableRow>
                            </TableHead>                           
                        </Table>
                    </TableContainer>
                    <br />
                    <br />
                    {/* <Divider /> */}
                    {/* <Divider style={{width:'100%'}} /> */}
                    <Divider variant="fullWidth" />

                    <Grid container sx={{mt:4}}>
                        <Grid item md={8} >
                        </Grid>
                        <Grid item md={4} >
                            <Table>
                                <TableRow sx={{p:0}}>
                                    <TableCell align="right" sx={{width:120, fontWeight: "600", fontSize: "14px"}}>Total Items:</TableCell>
                                    <TableCell align="left" sx={{width:120}}>0.00</TableCell>
                                </TableRow>
                                <TableRow sx={{p:0}}>
                                    <TableCell align="right" sx={{width:120, fontWeight: "600", fontSize: "14px"}}>Net Total Amount:</TableCell>
                                    <TableCell align="left" sx={{width:120}}>0.00</TableCell>
                                </TableRow>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
        <br />
        <br />
        <Container>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid container sx={{p:4, pt:3}} spacing={4}>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Business Location </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.BusinessLocation}
                                        label="Business Location"
                                        onChange={(event) => {
                                            setPurchaseAdd({...purchaseAdd, 
                                            BusinessLocation: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="">All</MenuItem>
                                            <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                                            <MenuItem value={"juiceria"}>Juiceria (1234567)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Typography>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl  size="small" fullWidth sx={{pl:2, pt:1}}>
                                        <TextField id="outlined-basic" label="Discount Amount:" 
                                        variant="outlined" size="small" defaultValue="0" />
                                    </FormControl>
                                </Typography>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10}>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={{margin:"auto"}}>
                                <Typography>
                                    Discount: (-) 0.00
                                </Typography>
                    </Grid>

                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Business Location </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.BusinessLocation}
                                        label="Business Location"
                                        onChange={(event) => {
                                            setPurchaseAdd({...purchaseAdd, 
                                            BusinessLocation: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="">All</MenuItem>
                                            <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                                            <MenuItem value={"juiceria"}>Juiceria (1234567)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Typography>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10} >
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10}>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={{margin:"auto"}}>
                                <Typography>
                                    Purchase Tax:(+) 0.00
                                </Typography>
                    </Grid>

                    <Grid item md={12} sx={purchaseList.selectFormcontrol}  >
                        <Typography>
                            Additional Notes
                        </Typography>
                        <FormControl size="small" fullWidth sx={{border:"1px solid #B97DF0"}}>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                // placeholder="Empty"
                                fullWidth
                                minRows={9}
                                
                            />
                        </FormControl>
                    </Grid>
                    
                </Grid>
                <br />
            </Grid>
        </Container>
        <br /><br />
        <Container>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid container sx={{p:3, pt:3, m:0}} spacing={1}>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol }  >
                                        <TextField id="outlined-basic" label="Shipping Details" variant="outlined" size="small" />
                                    </FormControl>
                                </Typography>
                    </Grid>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                    </Grid>
                    {/* <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                    </Grid> */}
                    <Grid  item  md={6}  sm={6}  xs={10} sx={purchaseList.selectInput} align="right" >
                        <Typography>
                            <FormControl   sx={  purchaseList.selectFormcontrol }  >
                                <TextField id="outlined-basic" label="(+) Additional Shipping charges:" variant="outlined" size="small"  defaultValue="0" />
                            </FormControl>
                        </Typography>
                    </Grid>                                     
                </Grid>
                <Grid container >
                    <Grid item md={4}>
                    </Grid>
                    <Grid item md={4} align="center">
                        <Button variant="contained" disableRipple>+ Add Additional Expenses <KeyboardArrowDownIcon /></Button>
                    </Grid>
                    <Grid item md={4}>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item md={10}>
                    </Grid>
                    <Grid item md={2}>
                        <Typography>
                            Purchase Total: ₹ 0.00
                        </Typography>
                    </Grid>
                </Grid>
                <br />
            </Grid>
        </Container>
        <br /><br />
        <Container>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid sx={{p:3}}>
                    <Typography variant="h6">
                        Add Payment
                    </Typography>
                </Grid>
                
                <Grid sx={{pl:5}}>
                <Typography >
                    Advance Balance: 0
                </Typography>
                </Grid>
                
                <br />
            </Grid>
        </Container>
        <br /><br />
    </Box>
  );
}