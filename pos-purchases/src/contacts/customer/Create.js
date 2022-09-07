import React, { useState } from 'react';
import {
    Button, Grid, InputLabel, FormControl,Box,
    OutlinedInput, Radio, FormControlLabel, RadioGroup, Tooltip, InputAdornment,
    MenuItem, Select,Dialog,DialogTitle,DialogContent,DialogActions,IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import MoneySharpIcon from '@mui/icons-material/MoneySharp';
import { FcInfo } from "react-icons/fc";
import { makeStyles, } from "@material-ui/core/styles";
//Style
import { userStyle } from '../../PageStyle';

// Tooltip
const useStyles = makeStyles(theme => ({
    arrow: {
        fontSize: 25,
        color: "7009AB !important",
        "&::before": { backgroundColor: "7009AB !important", boxShadow: '6px 6px 6px 9px #dedbdbae', }
    },
    tooltip: {
        fontSize: "17px !important",
        color: "#7009AB !important",
        backgroundColor: "white !important",
        boxShadow: '6px 6px 6px 9px #dedbdbae',
        padding: "20px",
    }
}));
function Customercreate() {
    const classes = useStyles();
    //*** individual or business ****//
    const [shown, setShown] = useState(true);
    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);
    //*** supplier customergroup hide ****//
    const [customHide, setcustomHide] = useState(true);
    //**** both supplier & customer *****/
    const [bothShow, setbothShow] = useState(true);
    //  dropdown 
    const [currency, setCurrency] = useState('');
    const handleChange = (event) => { setCurrency(event.target.value); };
    // Add Modal
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    //  Add Text Field
    const [editcusModForm, setEditCusModForm] = useState({
        editcusContactType: "", editcusContactId: "", editcusBusinessName: "", editcusPrefix: "", editcusFistN: "", editcusMiddleN: "", editcusLastN: "", editcusMobile: "",
        editcusAlternateMob: "", editcusLandline: "", editcusEmail: "", editcusDate: "", editcusTaxNo: "", editcusOpeningBal: "", editcusPayTerm: "", editcusAddressL1: "",
        editcusAddressL2: "", editcusCountry: "", editcusState: "", editcusCity: "", editcusZipCode: "", editcusCustom1: "", editcusCustom2: "", editcusCustom3: "",
        editcusCustom4: "", editcusCustom5: "", editcusCustom6: "", editcusCustom7: "", editcusCustom8: "", editcusCustom9: "", editcusShipping: "",
    });
    //**** Add Modal ***//
    const [supplierAddMod, setSupplierAddMod] = useState(false);
    const handleClickOpen1 = () => { setSupplierAddMod(true); };
    const handleClose1 = () => { setSupplierAddMod(false); };
    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);
    return (
        <>
            <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonadd} >ADD</Button>
            <Dialog PaperProps={{ style: { borderRadius: "10px" } }}
                onClose={handleClose}
                open={open}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}> Add contact </DialogTitle>
                <DialogContent dividers>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' },
                            '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container spacing={4} >
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons} >
                                        <PersonIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Contact type*</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="contact type*"
                                            value={editcusModForm.editcusContactType}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusContactType: event.target.value }) }}
                                            fullWidth >
                                            <MenuItem value={1} onClick={() => setcustomHide(false)}>supplier</MenuItem>
                                            <MenuItem value={2} onClick={() => setcustomHide(true)}>customer</MenuItem>
                                            <MenuItem value={3} onClick={() => setbothShow(true)}>both supplier&customer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ paddingLeft: '30px' }} >
                                        <FormControlLabel value="individual"
                                            onClick={() => { setShown(true); setShownDate(true) }} control={<Radio />}
                                            label="Individual"
                                        />
                                        <FormControlLabel value="business"
                                            onClick={() => { setShown(false); setShownDate(false) }} control={<Radio />}
                                            label="Business"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>
                                        <ContactPageSharpIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Contact Id"
                                            value={editcusModForm.editcusContactId}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {!shown ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIcon /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={editcusModForm.editcusBusinessName}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusBusinessName: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                :
                                <>
                                    {/* ****** 3rd Grid Start-Individual ****** */}
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={editcusModForm.editcusPrefix}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPrefix: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="First Name"
                                                    value={editcusModForm.editcusFistN}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusFistN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Middle Name"
                                                    value={editcusModForm.editcusMiddleN}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusMiddleN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Last Name"
                                                    value={editcusModForm.editcusLastN}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusLastN: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                            }
                            {customHide ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIcon /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Customer Groups</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={editcusModForm.editcusBusinessName}
                                                    onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusBusinessName: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8} ></Grid>
                                </>
                                : null}
                            {/* ****** 4th Grid Start ****** */}
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <MobileScreenShareIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={editcusModForm.editcusMobile}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusMobile: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>  <MobileFriendlyIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Alternate Mobile"
                                            value={editcusModForm.editcusAlternateMob}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusAlternateMob: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <PhoneIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Landline No"
                                            value={editcusModForm.editcusLandline}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>   <EmailIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Email"
                                            value={editcusModForm.editcusLandline}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {shownDate ?
                                <>
                                    {/* ****** 5th Grid Start ****** */}
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}>  <BusinessCenterIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label=""
                                                    type="date"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                : null}
                        </Grid>
                        {/* ****** More Information Button ****** */}
                        <Grid container sx={userStyle.buttonmore}>
                            <Grid >
                                <Button sx={userStyle.buttonadd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>
                            </Grid>
                        </Grid>
                        <br />
                        <hr />
                        <br />
                        {/* ****** More Information Grid Start ****** */}
                        {!hidden ?
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>   <FaInfo />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Tax No"
                                                value={editcusModForm.editcusTaxNo}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusTaxNo: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>    <MoneySharpIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Opening Balance"
                                                value={editcusModForm.editcusOpeningBal}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusOpeningBal: event.target.value }) }}
                                                type="text" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={{ width: '210px' }}>
                                            <FormControl variant="outlined" size="small" fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-password">PayTerm</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                        <Tooltip title="pay term" placement="top">
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                // value={productEdit.producteditsku}
                                                                // onChange={(e) => { setProductEdit({ ...productEdit, Producteditsku: e.target.value }) }}
                                                                >
                                                                    <FcInfo />
                                                                </IconButton>
                                                            </InputAdornment>
                                                        </Tooltip>
                                                    }
                                                    label="Pay Term"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Please Select</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Please Select"
                                                value={editcusModForm.editcusPayTerm}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPayTerm: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                    <em>Please Select</em>
                                                </MenuItem>
                                                <MenuItem value={1}>month</MenuItem>
                                                <MenuItem value={2}>Days</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}><MoneySharpIcon /></Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Credit Limit</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Business Name"
                                                value={editcusModForm.editcusBusinessName}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusBusinessName: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item lg={8}> </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Address Line 1"
                                                value={editcusModForm.editcusAddressL1}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusAddressL1: event.target.value }) }}
                                                type="text" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Grid sx={{ display: 'flex' }}  >

                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Address Line 2"
                                                value={editcusModForm.editcusAddressL2}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusAddressL2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>     <LanguageSharpIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Country</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="country"
                                                value={editcusModForm.editcusCountry}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCountry: event.target.value }) }}
                                                fullWidth  >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="State"
                                                value={editcusModForm.editcusState}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >

                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">City</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="City"
                                                value={editcusModForm.editcusCity}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCity: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">zip Code </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Zip Code"
                                                value={editcusModForm.editcusZipCode}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusZipCode: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 1 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 1 "
                                                value={editcusModForm.editcusCustom1}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom1: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 2 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 2 "
                                                value={editcusModForm.editcusCustom2}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 3</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 3"
                                                value={editcusModForm.editcusCustom3}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom3: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 4 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 4"
                                                value={editcusModForm.editcusCustom4}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom4: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 5</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 5"
                                                value={editcusModForm.editcusCustom5}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom5: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 6 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 6"
                                                value={editcusModForm.editcusCustom6}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom6: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 7 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 7"
                                                value={editcusModForm.editcusCustom7}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom7: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 8 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 8"
                                                value={editcusModForm.editcusCustom8}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom8: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 9 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={editcusModForm.editcusCustom9}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom9: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 10 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={editcusModForm.editcusCustom9}
                                                onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusCustom9: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={3}  ></Grid>
                                <Grid item md={3}  ></Grid>
                                <Grid item md={2}  ></Grid>
                                <Grid item md={8}  >
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Shipping Address "
                                            value={editcusModForm.editcusShipping}
                                            onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusShipping: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={2}></Grid>
                            </Grid>
                            : null}
                        {/* ****** More Information Grid End ****** */}    
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" autoFocus onClick={handleClose} >
                        Save
                    </Button>
                    <Button variant="contained" color="error" autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default Customercreate;