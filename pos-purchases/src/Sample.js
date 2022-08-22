import { React, useState } from "react"; 
// import {Box,Grid,Container,Typography} from "@mui/material";
import { Typography,Container,Select,Checkbox,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Menu,TableSortLabel,Tooltip,Avatar,Divider,Toolbar,Table,TableBody,
    TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
    DialogContent,DialogActions,tableCellClasses} from "@mui/material";
    import Accordion from '@mui/material/Accordion';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import AccordionDetails from '@mui/material/AccordionDetails';
import {prodStyle, prodList} from "./ProductStyle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";


export default function PurchasesList(){
    return(
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid >
                    <Typography variant="h5" >Purchases</Typography>
                </Grid>
            </Container>
            <br />
// Filters Grid
        <Container>
            <Grid>
                <Grid  fullWidth sx={{ '& .MuiGrid-root':{
                paddingRight: 0,paddingLeft: 0,        }}}>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChangePanel("panel1")}
                    sx={ prodStyle.prod_container}
                >
                    <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    >
                    <Typography sx={{ color: " #7009AB" }}>
                        <FilterAltIcon /> Filter
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2}>
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

                           

                    </Grid>
                    </AccordionDetails>
                </Accordion>
                </Grid>
            </Grid>

        </Container>
        </Box>

    )
};