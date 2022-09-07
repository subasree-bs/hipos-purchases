import * as React from "react";
import { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography,Select,Checkbox,FormControl,MenuItem, Grid, InputLabel, Box, Button,Tab} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {TabContext,TabList,TabPanel} from "@mui/lab";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import {prodStyle, prodList} from "./ProductStyle";
import AllProductsTable from "./AllProductTable";
import StockReportTable from "./StockTable"
// import { TableRow, TableCell} from '../../Table';
// import Sidebar from '../../../header/Sidebar';

function Productlist(){

// Filter - All Select Inputs
const [productFilter, setProductFilter] = useState({ProductType: "",Category: "",Unit:"",Tax:"",Brand:"",BusinessLocation:"",Status:""})

// Accordion expand  
  const [expanded, setExpanded] = useState("panel1");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
// Tab
  const [TabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


  return (
    <Box sx={{margin: '0px 30px'}}>
      <Typography  variant="h5" sx={prodStyle.UnitHeaderText}>Products 
      <Typography  sx={prodStyle.UnitSubHeaderText}>Manage your products</Typography></Typography>
      {/* ***** Filters Grid ***** */}

    <Box>
      <Grid>
        <Grid  fullWidth sx={{ '& .MuiGrid-root':{
          paddingRight: 0,paddingLeft: 0,        }}}>
          <MuiAccordion
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
            sx={ prodStyle.prod_container}
          >
            <MuiAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ color: " #7009AB" }}>
                <FilterAltIcon /> Filter
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <Grid container spacing={2}>
                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                    <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Product Type </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.ProductType}
                        label="Product Type"
                        onChange={(event) => {
                          setProductFilter({...productFilter, ProductType: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"single"}>Single</MenuItem>
                        <MenuItem value={"variable"}>Variable</MenuItem>
                        <MenuItem value={"combo"}>Combo</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Category</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Category}
                        label="Category"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Category: event.target.value})
                        }}
                      >
                        <MenuItem value="category_all">All</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Unit</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Unit}
                        label="Unit"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Unit: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"pieces"}>Pieces (Pc(s))</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Tax</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Tax}
                        label="Tax"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Tax: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"gst"}>GST</MenuItem>
                        <MenuItem value={"cgst"}>CGST</MenuItem>
                        <MenuItem value={"tax"}>Tax</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Brand</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Brand}
                        label="Brand"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Brand: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"motog"}>MotoG</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                    <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">
                        Business Location 
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.BusinessLocation}
                        label="Business Location"
                        onChange={(event) => {
                          setProductFilter({...productFilter, BusinessLocation: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"none"}>None</MenuItem>
                        <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                        <MenuItem value={"juiceria"}>
                          Juiceria (1234567)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <Select  value={productFilter.Status}   onChange={(event) => {
                          setProductFilter({...productFilter, Status: event.target.value})
                        }}  displayEmpty >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"active"}>Active</MenuItem>
                        <MenuItem value={"inactive"}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid item md={3} sm={6} xs={10}>
                  <Typography>
                    <FormControl sx={{ m: 1 }} size="small" fullWidth>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                          />
                        }
                        label="Not for selling"
                      />
                    </FormControl>
                  </Typography>
                </Grid>

              </Grid>
            </MuiAccordionDetails>
          </MuiAccordion>
        </Grid>
      </Grid>

      {/* ********Tabs Grid******** */}

      <>
      <br />
      <br />
      <Grid sx={ prodStyle.prod_container } >
        <Box sx={{ typography: "body1" }}>
          <TabContext value={TabValue}>
            <Box>
              <TabList onChange={handleTabChange} aria-label="Tabs" TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009AB',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}>
                <Tab icon={<ViewInArIcon />} iconPosition="start" label="All Products" 
                value="1" sx={prodList.tab}
                />
                <Tab icon={<HourglassFullIcon />} iconPosition="start" label="Stock Report" 
                value="2" sx={prodList.tab}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={prodList.tabpanel}>
              <>
                <br />
                <Button
                  className="add_btn"
                  variant="contained"
                  sx={prodList.add}
                >
                  <Link to="/productcreate" style={{color: 'white',textDecoration: 'none'}}>Add</Link>
                </Button>
          {/* ****** All Products Table ****** */}      
                <AllProductsTable />
          {/* ****** All Products Table Ends ****** */}
              </>
            </TabPanel>
              {/* *****Stock Report***** */}

            <TabPanel value="2" sx={prodList.tabpanel}>
         {/* ****** Stock Report Table ****** */}
                <StockReportTable />            
         {/* ****** Stock Report Table Ends ****** */}
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      </>
      </Box>
    </Box>
  );
}
// function Productlist(){
//   return(
//     <Box sx={{display:'flex', }} >
//     <Sidebar />
//     <Box sx={{width:'100%',overflowX:'hidden'}}>
//       <Box component="main" ><br /><br /><br />
//         <Productlisttable />
//       </Box>
//     </Box>
//   </Box>
//   );
// }

export default Productlist;