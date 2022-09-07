import React,{ useState} from 'react';
import { Box,TextField,Button,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions,IconButton } from '@mui/material';
import { userStyle } from '../../PageStyle';

function CustomorGroupcreate(){
  //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  // Input
  const [addCustomerGroup,setAddCustomerGroup] = useState({addCustGrpName:"",addCustGrpPriceCalcType:"",addCustGrpCalcPercent:""});

  return(
    <>
      {/* ****** Form Start ****** */}
      <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0'} }} noValidate autoComplete="off" >
          <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonadd} > Add </Button>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <FormControl size="small" fullWidth >
                  <InputLabel htmlFor="component-outlined" >Customer Group Name *</InputLabel>
                  <OutlinedInput
                      id="addCustGroupName"
                      value={addCustomerGroup.addCustGrpName}
                      onChange={(e) => { setAddCustomerGroup({ ...addCustomerGroup,addCustGrpName : e.target.value }) }}
                      label="Customer Group Name *"
                  />
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <FormControl size="small" fullWidth >
                <InputLabel id="demo-select-small">Price calculation type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={addCustomerGroup.addCustGrpPriceCalcType}
                    onChange={(e) => { setAddCustomerGroup({ ...addCustomerGroup, addCustGrpPriceCalcType: e.target.value }) }}
                    label="Price calculation type"
                >
                    <MenuItem value={"addCustGroupPercentage"}>Percentage</MenuItem>
                    <MenuItem value={"addCustGroupSellPriceGrp"}>Selling Price Group</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Calculation Percentage (%)</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      endAdornment={
                        <Tooltip title='Selling price = Selling price Set For the product + Calculation percentage. You can specify percentage as positive to increase and negtive to decrease selling price.' placement="top">
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="tooltip info"
                                    edge="end"
                                    value={addCustomerGroup.addCustGrpCalcPercent}
                                    onChange={(e) => { setAddCustomerGroup({ ...addCustomerGroup, addCustGrpCalcPercent: e.target.value }) }}
                                >
                                    <FcInfo />
                                </IconButton>
                            </InputAdornment>
                        </Tooltip>
                      }
                      label="Calculation Percentage (%)"
                    />
                </FormControl>
            </Grid>
          </Grid>
      </Box>
      {/* ****** Form End ****** */}
    </>
  );
}
export default CustomorGroupcreate;