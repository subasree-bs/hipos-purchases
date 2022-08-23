import React, { useState } from "react";
import {
    Container, Grid, InputLabel, FormControl,
    Button, OutlinedInput, Radio, FormControlLabel, RadioGroup,
    MenuItem, Select, Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
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
import { FaInfo, FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {purchaseStyle, purchaseList,purchaseCreate} from "./PurchaseStyle";

export default function Suppadd() {

    //***individual or business****//
    const [shown, setShown] = useState(true);


    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>

        );
    };

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };



    //****add Modal***//

    const [supplierAddMod, setSupplierAddMod] = useState(false);
    const handleClickOpen1 = () => {
        setSupplierAddMod(true);
    };
    const handleClose1 = () => {
        setSupplierAddMod(false);
    };

    //***more information***// 
    const [hidden, setHidden] = useState(true);



    //  Add Text field
    const [addsupModal, setAddSupModal] = useState({
        addsupContactType: "", addsupContactId: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "", addsupMiddleN: "", addsupLastN: "", addsupMobile: "",
        addsupAlternateMob: "", addsupLandline: "", addsupEmail: "", addsupDate: "", addsupTaxNo: "", addsupOpeningBal: "", addsupPayTerm: "", addsupAddressL1: "",
        addsupAddressL2: "", addsupCountry: "", addsupState: "", addsupCity: "", addsupZipCode: "", addsupCustom1: "", addsupCustom2: "", addsupCustom3: "",
        addsupCustom4: "", addsupCustom5: "", addsupCustom6: "", addsupCustom7: "", addsupCustom8: "", addsupCustom9: "", addsupShipping: "",
    });
    return (
        <>
            <>
                <Button variant="outlined" onClick={handleClickOpen1} > 
                  <AddCircleIcon />
                </Button>
            </>
            <form action=''>
                <Container >
                    <BootstrapDialog
                        onClose={handleClose1}
                        aria-labelledby="customized-dialog-title"
                        open={supplierAddMod}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #B97DF0',
                            },

                            "& .MuiDialog-container": {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: "950px",
                                    minHeight: "450px"

                                },
                            },
                        }}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1}>
                            Add New Contact
                        </BootstrapDialogTitle>


                        <DialogContent dividers >

                            {/* first grid */}

                            <Grid container spacing={4} >
                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons} >
                                            <PersonIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Contact type*</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="contact type*"
                                                value={addsupModal.addsupContactType}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupContactType: event.target.value }) }}
                                                fullWidth>

                                                <MenuItem value="">
                                                    <em>Please Select</em>
                                                </MenuItem>
                                                <MenuItem value={1}>supplier</MenuItem>
                                                <MenuItem value={2}>customer</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item md={4}  >

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


                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex', paddingLeft: '30px' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}>
                                            <ContactPageSharpIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Contact Id"
                                                value={addsupModal.addsupContactId}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupContactId: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>




                                {/* second grid start */}


                                {!shown ?

                                    <>
                                        <Grid item md={4} >
                                            <Grid sx={{ display: 'flex' }}  >


                                                <Grid sx={purchaseCreate.grid_icons}><BusinessCenterIcon />
                                                </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Business Name"
                                                        value={addsupModal.addsupBusinessName}
                                                        onChange={(event) => { setAddSupModal({ ...addsupModal, addsupBusinessName: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>

                                            </Grid>
                                        </Grid>

                                        <Grid item md={8}  >

                                        </Grid>
                                    </>

                                    :
                                    <>
                                        {/* 3rd grid start-individual */}


                                        <Grid item md={3}>

                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Business Name"
                                                        value={addsupModal.addsupPrefix}
                                                        onChange={(event) => { setAddSupModal({ ...addsupModal, addsupPrefix: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="First Name"
                                                        value={addsupModal.addsupFistN}
                                                        onChange={(event) => { setAddSupModal({ ...addsupModal, addsupFistN: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>


                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Middle Name"
                                                        value={addsupModal.addsupMiddleN}
                                                        onChange={(event) => { setAddSupModal({ ...addsupModal, addsupMiddleN: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>

                                            </Grid>

                                        </Grid>

                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Last Name"
                                                        value={addsupModal.addsupLastN}
                                                        onChange={(event) => { setAddSupModal({ ...addsupModal, addsupLastN: event.target.value }) }}
                                                        type="text" />

                                                </FormControl>
                                            </Grid>

                                        </Grid>
                                    </>


                                }

                                {/* 4th grid start */}
                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}> <MobileScreenShareIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Mobile *"
                                                value={addsupModal.addsupMobile}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupMobile: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item md={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}>  <MobileFriendlyIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Alternate Mobile"
                                                value={addsupModal.addsupAlternateMob}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupAlternateMob: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>



                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}> <PhoneIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Landline No"
                                                value={addsupModal.addsupLandline}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupLandline: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>



                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}>   <EmailIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Email"
                                                value={addsupModal.addsupLandline}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupLandline: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                {/* 5th grid start */}
                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseCreate.grid_icons}>  <BusinessCenterIcon />
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


                                <Grid item md={8}  >

                                </Grid>
                            </Grid>



                            {/* more information button */}
                            <Grid container sx={purchaseCreate.container_more}>
                                <Grid >
                                    <Button sx={purchaseCreate.buttonAdd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>

                                </Grid>
                            </Grid>
                            <br />
                            <br />


                            {/* taxno grid */}


                            {!hidden ?

                                <Grid container spacing={4} >
                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseCreate.grid_icons}>   <FaInfo />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Tax No"
                                                    value={addsupModal.addsupTaxNo}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupTaxNo: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>



                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseCreate.grid_icons}>    <MoneySharpIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Opening Balance"
                                                    value={addsupModal.addsupOpeningBal}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupOpeningBal: event.target.value }) }}
                                                    type="text" />

                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseCreate.grid_icons}>    <PersonIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">Pay Term</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="Pay Term"
                                                    value={addsupModal.addsupPayTerm}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupPayTerm: event.target.value }) }}
                                                    fullWidth
                                                >
                                                    <MenuItem value="">
                                                        <em>Please Select</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>supplier</MenuItem>
                                                    <MenuItem value={2}>customer</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 1"
                                                    value={addsupModal.addsupAddressL1}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupAddressL1: event.target.value }) }}
                                                    type="text" />

                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 2"
                                                    value={addsupModal.addsupAddressL2}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupAddressL2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseCreate.grid_icons}>     <LanguageSharpIcon />
                                            </Grid>

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">Country</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="country"
                                                    value={addsupModal.addsupCountry}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCountry: event.target.value }) }}
                                                    fullWidth  >

                                                    <MenuItem value="">

                                                    </MenuItem>
                                                    <MenuItem value={1}>xxx</MenuItem>
                                                    <MenuItem value={2}>yyy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">State</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="State"
                                                    value={addsupModal.addsupState}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupState: event.target.value }) }}
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

                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">City</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="City"
                                                    value={addsupModal.addsupCity}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCity: event.target.value }) }}
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

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseCreate.grid_icons}>    <LocationOnIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">zip Code </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Zip Code"
                                                    value={addsupModal.addsupZipCode}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupZipCode: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 1 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 1 "
                                                    value={addsupModal.addsupCustom1}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom1: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 2 "
                                                    value={addsupModal.addsupCustom2}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 3</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 3"
                                                    value={addsupModal.addsupCustom3}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom3: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 4 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 4"
                                                    value={addsupModal.addsupCustom4}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom4: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 5</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 5"
                                                    value={addsupModal.addsupCustom5}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom5: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 6 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 6"
                                                    value={addsupModal.addsupCustom6}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom6: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 7 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 7"
                                                    value={addsupModal.addsupCustom7}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom7: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 8 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 8"
                                                    value={addsupModal.addsupCustom8}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom8: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 9 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 9 "
                                                    value={addsupModal.addsupCustom9}
                                                    onChange={(event) => { setAddSupModal({ ...addsupModal, addsupCustom9: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}  ></Grid>
                                    <Grid item md={3}  ></Grid>
                                    <Grid item md={2}></Grid>
                                    <Grid item md={8}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Shipping Address "
                                                value={addsupModal.addsupShipping}
                                                onChange={(event) => { setAddSupModal({ ...addsupModal, addsupShipping: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={2}></Grid>

                                </Grid>

                                : null}


                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus variant='contained' color="success">Save</Button>
                            <Button onClick={handleClose1} variant='contained' color="error">Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                </Container>
            </form>
        </>

    );
}