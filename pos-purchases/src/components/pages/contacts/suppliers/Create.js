import React, { useState } from 'react';
import {
    Button, Grid, Tooltip, InputLabel, FormControl,DialogActions,Box,
    OutlinedInput, Radio, FormControlLabel, RadioGroup,IconButton,
    MenuItem, Select, InputAdornment,Dialog,DialogTitle,DialogContent
} from '@mui/material';
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
import { userStyle } from '../../PageStyle';

function Suppliercreate() {
    //*** individual or business ****//
    const [shown, setShown] = useState(true);
    //*** supplier customergroup hide ****//
    const [customHide, setcustomHide] = useState(true);
    //**** both supplier&customer *****/
    const [bothShow, setbothShow] = useState(true);
    //  dropdown 
    const [currency, setCurrency] = useState('');
    const handleChange = (event) => { setCurrency(event.target.value); };
    //Add modal
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    //  Add Text field
    const [addsupModForm, setAddSupModForm] = useState({
        addsupContactType: "", addsupContactId: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "", addsupMiddleN: "", addsupLastN: "", addsupMobile: "",
        addsupAlternateMob: "", addsupLandline: "", addsupEmail: "", addsupDate: "", addsupTaxNo: "", addsupOpeningBal: "", addsupPayTerm: "", addsupAddressL1: "",
        addsupAddressL2: "", addsupCountry: "", addsupState: "", addsupCity: "", addsupZipCode: "", addsupCustom1: "", addsupCustom2: "", addsupCustom3: "",
        addsupCustom4: "", addsupCustom5: "", addsupCustom6: "", addsupCustom7: "", addsupCustom8: "", addsupCustom9: "", addsupCustom10: "", addsupShipping: "",
    });
    //**** Add Modal ***//
    const [supplierAddMod, setSupplierAddMod] = useState(false);
    const handleClickOpen1 = () => { setSupplierAddMod(true); };
    const handleClose1 = () => { setSupplierAddMod(false); };
    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonadd} color="primary">Add</Button>
            <Dialog PaperProps={{
                style: {
                    borderRadius: "10px"
                }
            }}
                onClose={handleClose}
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>Add Supplier</DialogTitle>
                <DialogContent dividers>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #B97DF0',
                            },
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
                                            value={addsupModForm.addsupContactType}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupContactType: event.target.value }) }}
                                            fullWidth>
                                            <MenuItem value={1} onClick={() => setcustomHide(false)}>supplier</MenuItem>
                                            <MenuItem value={2} onClick={() => setcustomHide(true)}>customer</MenuItem>
                                            <MenuItem value={3} onClick={() => setbothShow(true)}>both supplier&customer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}  >
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ paddingLeft: '30px' }} >
                                        <FormControlLabel value="female" onClick={() => setShown(true)} control={<Radio />} label="Individual" />
                                        <FormControlLabel value="male" onClick={() => setShown(false)} control={<Radio />} label="Business" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Grid sx={{ display: 'flex', }}  >
                                    <Grid sx={userStyle.spanIcons}>
                                        <ContactPageSharpIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Contact Id"
                                            value={addsupModForm.addsupContactId}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {!shown ?
                                <>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={addsupModForm.addsupBusinessName}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupBusinessName: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>                                    
                                </>
                                :
                                <>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={addsupModForm.addsupPrefix}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupPrefix: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="First Name"
                                                    value={addsupModForm.addsupFistN}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupFistN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Middle Name"
                                                    value={addsupModForm.addsupMiddleN}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupMiddleN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Last Name"
                                                    value={addsupModForm.addsupLastN}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLastN: event.target.value }) }}
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
                                                    value={addsupModForm.addsupMobile}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupMobile: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8} ></Grid>
                                </>
                                : null}
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <MobileScreenShareIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={addsupModForm.addsupMobile}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupMobile: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>  <MobileFriendlyIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Alternate Mobile"
                                            value={addsupModForm.addsupAlternateMob}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAlternateMob: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <PhoneIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Landline No"
                                            value={addsupModForm.addsupLandline}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>   <EmailIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Email"
                                            value={addsupModForm.addsupLandline}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}>
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
                            <Grid item md={8}  >   </Grid>
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
                            <Grid container spacing={4} >
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>   <FcInfo />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Tax No"
                                                value={addsupModForm.addsupTaxNo}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupTaxNo: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={userStyle.spanIcons}>    <MoneySharpIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Opening Balance"
                                                value={addsupModForm.addsupOpeningBal}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupOpeningBal: event.target.value }) }}
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
                                        <hr />
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Please Select</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Please Select"
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
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Address Line 1"
                                                value={addsupModForm.addsupAddressL1}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAddressL1: event.target.value }) }}
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
                                                value={addsupModForm.addsupAddressL2}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAddressL2: event.target.value }) }}
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
                                                value={addsupModForm.addsupCountry}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCountry: event.target.value }) }}
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
                                                value={addsupModForm.addsupState}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupState: event.target.value }) }}
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
                                                value={addsupModForm.addsupCity}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCity: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">Select</MenuItem>
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
                                                value={addsupModForm.addsupZipCode}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupZipCode: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 1 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 1 "
                                                value={addsupModForm.addsupCustom1}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom1: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 2 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 2 "
                                                value={addsupModForm.addsupCustom2}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 3</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 3"
                                                value={addsupModForm.addsupCustom3}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom3: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 4 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 4"
                                                value={addsupModForm.addsupCustom4}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom4: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >

                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 5</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 5"
                                                value={addsupModForm.addsupCustom5}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom5: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 6 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 6"
                                                value={addsupModForm.addsupCustom6}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom6: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 7 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 7"
                                                value={addsupModForm.addsupCustom7}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom7: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 8 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 8"
                                                value={addsupModForm.addsupCustom8}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom8: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 9 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={addsupModForm.addsupCustom9}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom9: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom 10 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={addsupModForm.addsupCustom10}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom10: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <br /><br />
                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Shipping Address "
                                            value={addsupModForm.addsupShipping}
                                            onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupShipping: event.target.value }) }}
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
export default Suppliercreate;