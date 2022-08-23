import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Divider,TextField,Typography,Container,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
   Menu,Tooltip,Toolbar,Table,TableBody,
   TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
   DialogContent,DialogActions,tableCellClasses,OutlinedInput,InputAdornment,NativeSelect} from "@mui/material";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";
import {Link} from "react-router-dom";
import {purchaseStyle, purchaseList,purchaseCreate} from "./PurchaseStyle";
import SearchIcon from '@mui/icons-material/Search';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import { FcInfo } from "react-icons/fc";
import SupplierModal from "./AddProductModal"

export default function CustomizedAccordions() {

// Filter - All Select Inputs
const [purchaseAdd, setPurchaseAdd] = useState({BusinessLocation:"",})
const [purchaseCreate, setPurchaseCreate] = useState({Supplier:"", RefNum:"",purchaseStatus: "",
BusinessLocation:"",PayTerm:"",DiscountType:"",PurchaseTax:"",PaymentMethod:"",})

const [hidden, setHidden] = useState(true);


  return (
    <Box>
        {/* ***** Title Start***** */}
        <Box sx={{ paddingTop: '10px' }}>
            <Typography variant="h5" >Add Purchase</Typography>
        </Box>
        <br />
        {/* ***** Title End***** */}

        <Box>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Box sx={{ typography: "body1" }}>    
                    <Box sx={{p:4}}>            
                        <Grid container spacing={2}>
                            {/* <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Business Location </InputLabel>
                                        <Select
                                        labelId="demo-select-small" 
                                        sx={{ml:-2}}
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
                            </Grid> */}

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseCreate.grid_icons}>   <PersonIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <InputLabel id="demo-select-small">Supplier * </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseCreate.Supplier}
                                        label="Supplier *"
                                        onChange={(event) => {
                                            setPurchaseCreate({...purchaseCreate, 
                                                Supplier: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="">All</MenuItem>
                                            <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                                            <MenuItem value={"juiceria"}>Juiceria (1234567)</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={{ml:-1,mt:1}}> <SupplierModal />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <FormControl variant="outlined" size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <InputLabel htmlFor="outlined-adornment-password">Reference Number *</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            <Tooltip title='Leave empty to autogenerate' placement="top">
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label=""
                                                        edge="end"
                                                        value={purchaseCreate.RefNum}
                                                        onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, RefNum: e.target.value }) }}
                                                    >
                                                        <FcInfo />
                                                    </IconButton>
                                                </InputAdornment>
                                            </Tooltip>
                                        }
                                        label="Reference Number *"
                                    />
                                </FormControl>
                            </Grid>                            
                            
                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    {/* <FormControl  size="small" fullWidth sx={{pl:2, pt:1}}> */}
                                    {/* <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <InputLabel htmlFor="component-outlined">Reference Number</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseCreate.RefNum}
                                        onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, RefNum: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl> */}
                                    {/* </FormControl> */}
                                </Typography>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                        <InputLabel htmlFor="uncontrolled-native">Purchase Status *
                                            <Tooltip title="Products in this purchase will be available for sale only if the Order Status is Items Received." style={{fontSize:'32px'}}>
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip></InputLabel>
                                        <NativeSelect
                                        defaultValue={0}
                                            inputProps={{
                                                name: 'Role',
                                                id: 'uncontrolled-native',
                                            }}
                                            value={purchaseCreate.purchaseStatus}
                                            onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, purchaseStatus: e.target.value }) }}
                                            label="Purchase Status *"
                                        >
                                            <option value={0}>Please Select</option>
                                            <option value={"received"}>Received</option>
                                            <option value={"pending"}>Pending</option>
                                            <option value={"ordered"}>Ordered</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Typography>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    {/* <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <InputLabel htmlFor="component-outlined">Address:</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseCreate.RefNum}
                                        onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, RefNum: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl> */}
                                Address:
                                </Typography>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                        <InputLabel htmlFor="uncontrolled-native">Business Location *
                                            <Tooltip title="Business location where the purchased product will be available for sale." style={{fontSize:'32px'}}>
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip></InputLabel>
                                        <NativeSelect
                                        defaultValue={0}
                                            inputProps={{
                                                name: 'Role',
                                                id: 'uncontrolled-native',
                                            }}
                                            value={purchaseCreate.BusinessLocation}
                                            onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, BusinessLocation: e.target.value }) }}
                                            label="Business Location *"
                                        >
                                            <option value={0}>Please Select</option>
                                            <option value={"xyz"}>XYZ (123456)</option>
                                            <option value={"juiceria"}>Juiceria (1234567)</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Typography>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    {/* <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <InputLabel htmlFor="component-outlined">Address:</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseCreate.RefNum}
                                        onChange={(e) => { setPurchaseCreate({ ...purchaseCreate, RefNum: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl> */}
                                {/* Address: */}
                                </Typography>
                            </Grid>

                            <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <FormControl size="small" fullWidth sx={  purchaseList.selectFormcontrol }>
                                    <Button >
                                        Attach Document
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                    <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                        Max File size: 5MB <br />
                                        Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                                    </Typography>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                    </Box>
                </Box>
            </Grid>
        </Box>
        <br />
        <br />
    {/* ******Second Container****** */}
        <Box>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid container sx={{p:3}}>
                    <Grid item md={2}>
                    </Grid>
                    <Grid  item  md={7}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                        <Grid sx={{display:"flex"}}>
                                <Grid sx={{ fontSize: '24px',paddingLeft: '4px',paddingRight: '6px',paddingTop: '4px',
                                margin: 'auto',border: '1px solid #B97DF0',width: '38px',height: '41px',
                                borderRadius: '2px',backgroundColor: '#fff',color: '#7009AB', }}  ><SearchIcon />
                                </Grid>
                                <FormControl sx={  purchaseCreate.disabledSearch } size="small" fullWidth >
                                    <TextField id="outlined-basic" label="Enter Product name / SKU / Scan bar code"
                                    variant="outlined" disabled size="small" sx={  purchaseCreate.disabledSearch } />
                                </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={2} align="center">
                        {/* <AddIcon /> */}
                       <Button variant="text"> + Add New Product </Button>
                    </Grid>
                    <br />
                    <br />
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
                                <TableRow >
                                    <TableCell align="right" sx={{width:120, fontWeight: "600", fontSize: "14px"}}>Total Items:</TableCell>
                                    <TableCell align="left" sx={{width:120}}>0.00</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="right" sx={{width:120, fontWeight: "600", fontSize: "14px"}}>Net Total Amount:</TableCell>
                                    <TableCell align="left" sx={{width:120}}>0.00</TableCell>
                                </TableRow>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Box>
        <br />
        <br />
        <Box>
            <Grid sx={ purchaseStyle.purchaseContainer } >
                <Grid container sx={{p:4, pt:3}} spacing={4}>
                    <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                                <Typography>
                                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Discount Type </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseCreate.DiscountType}
                                        label="Discount Type"
                                        onChange={(event) => {
                                            setPurchaseCreate({...purchaseCreate, 
                                                DiscountType: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="none">None</MenuItem>
                                            <MenuItem value={"fixed"}>Fixed</MenuItem>
                                            <MenuItem value={"percentage"}>Percentage</MenuItem>
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
                                        <InputLabel id="demo-select-small">Purchase Tax </InputLabel>
                                        <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseCreate.PurchaseTax}
                                        label="Purchase Tax"
                                        onChange={(event) => {
                                            setPurchaseCreate({...purchaseCreate, 
                                            PurchaseTax: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="none">None</MenuItem>
                                            <MenuItem value={"gst"}>GST</MenuItem>
                                            <MenuItem value={"cgst"}>CGST</MenuItem>
                                            <MenuItem value={"tax"}>TAX</MenuItem>
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
                        <Typography>Additional Notes</Typography>
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
        </Box>
        <br /><br />
        <Box>
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
                        <Button variant="contained" disableRipple  onClick={() => setHidden(s => !s)}>+ Add Additional Expenses <KeyboardArrowDownIcon /></Button>
                    </Grid>
                    <Grid item md={4}>
                    </Grid>
                </Grid>
                <br />
                {!hidden ?
                <Grid container>
                    <Grid item md={5}>
                    </Grid>
                    <Grid item md={7}>
                        <Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Additional expense name</TableCell>
                                        <TableCell>Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth/></TableCell>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" defaultValue="0" 
                                        size="small" fullWidth /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth /></TableCell>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" defaultValue="0" 
                                        size="small" fullWidth /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth /></TableCell>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" defaultValue="0" 
                                        size="small" fullWidth /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth /></TableCell>
                                        <TableCell sx={purchaseCreate.addtl_table_p}><TextField id="outlined-basic" label="" variant="outlined" defaultValue="0" 
                                        size="small" fullWidth /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid> : null
                }
                <br />
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
        </Box>
        <br /><br />
    {/* ****** Last Container ****** */}
        <Box>
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

                <Grid container sx={{p:3}} spacing={2}>
                <Grid  item  md={4}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                        <Grid sx={{display:"flex"}}>
                                <Grid sx={{ fontSize: '24px',paddingLeft: '4px',paddingRight: '6px',paddingTop: '4px',
                                margin: 'auto',border: '1px solid #B97DF0',width: '38px',height: '41px',
                                borderRadius: '2px',backgroundColor: '#fff',color: '#7009AB', }}  ><CreditCardIcon />
                                </Grid>
                                <FormControl sx={  purchaseCreate.disabledSearch } size="small" fullWidth >
                                    <TextField id="outlined-basic" defaultValue="0.00" label="Amount*"
                                    variant="outlined"  size="small" sx={  purchaseCreate.disabledSearch } />
                                </FormControl>
                        </Grid>
                    </Grid>
                    <Grid  item  md={4}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                        <Grid sx={{display:"flex"}}>
                                <Grid sx={{ fontSize: '24px',paddingLeft: '4px',paddingRight: '6px',paddingTop: '4px',
                                margin: 'auto',border: '1px solid #B97DF0',width: '38px',height: '41px',
                                borderRadius: '2px',backgroundColor: '#fff',color: '#7009AB', }}  ><CreditCardIcon />
                                </Grid>
                                <FormControl sx={  purchaseCreate.disabledSearch } size="small" fullWidth >
                                    <TextField id="outlined-basic" defaultValue="0.00" label="Amount*"
                                    variant="outlined"  size="small" sx={  purchaseCreate.disabledSearch } />
                                </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item md={4}>
                    </Grid>

                    <Grid  item  md={4}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                        <Grid sx={{display:"flex"}}>
                                {/* <Grid sx={{ fontSize: '24px',paddingLeft: '4px',paddingRight: '6px',paddingTop: '4px',
                                margin: 'auto',border: '1px solid #B97DF0',width: '38px',height: '41px',
                                borderRadius: '2px',backgroundColor: '#fff',color: '#7009AB', }}  ><CreditCardIcon />
                                </Grid> */}
                                <FormControl sx={  purchaseCreate.selectFormcontrol } size="small" fullWidth >
                                    <InputLabel id="idPaymentMethod">Payment Method * </InputLabel>
                                <Select
                                        labelId="demo-select-small" 
                                        sx={{ml:-2}}
                                        id="demo-select-small"
                                        value={purchaseCreate.PaymentMethod}
                                        label="Payment Method *"
                                        onChange={(event) => {
                                            setPurchaseCreate({...purchaseCreate, 
                                            PaymentMethod: event.target.value})
                                        }}
                                        >
                                            <MenuItem value="advance">Advance</MenuItem>
                                            <MenuItem value="cash">Cash</MenuItem>
                                            <MenuItem value="card">Card</MenuItem>
                                            <MenuItem value="cheque">Cheque</MenuItem>
                                            <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                            <MenuItem value="custompay 1">Custom Payment 1</MenuItem>
                                            <MenuItem value="custompay 2">Custom Payment 2</MenuItem>
                                            <MenuItem value="custompay 3">Custom Payment 3</MenuItem>
                                            <MenuItem value="custompay 4">Custom Payment 4</MenuItem>
                                            <MenuItem value="custompay 5">Custom Payment 5</MenuItem>
                                            <MenuItem value="custompay 6">Custom Payment 6</MenuItem>
                                            <MenuItem value="custompay 7">Custom Payment 7</MenuItem>
                                        </Select>
                                </FormControl>
                        </Grid>
                {/* ****** Text Area - Payment note ****** */}
                        
                    </Grid>
                    <Grid item md={12} sx={purchaseList.selectFormcontrol}  >
                            <Typography>Payment note</Typography>
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
        </Box>
        <br /><br />
    </Box>
  );
}