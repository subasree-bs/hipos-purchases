import React, {useEffect} from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { StyledTableRow, StyledTableCell} from '../Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';

import {ProductStyle} from './ProductStyle';
import Sidebar from '../../header/Sidebar';

function ImportProductslist() {
 return (
        <Box>
            <Typography sx={ProductStyle.ImporTHeaderText}>Import Products</Typography>
            <Box sx={ProductStyle.ImportContainer}>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                <Button variant="contained" component="label" sx={{ textTransform: 'Capitalize'}}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize'}}>Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize'}}><FaDownload/>&ensp;Download template file</Button>
            
        </Box><br />
        <Box sx={ProductStyle.ImportContainer}>
        <Typography sx={ProductStyle.importheadtext}>Instructions</Typography>
        <br />
        <Typography sx={ProductStyle.importsubheadtex}>Follow the instructions carefully before importing the file</Typography>
        <Typography sx={ProductStyle.importsubheadtext}>The columns of the file should be in the following order.</Typography>
        <br /><br />
        <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      // height:400,
      margin:'auto',
      overflow:'auto',
       "&::-webkit-scrollbar":{
        width:20
      },
      "&::-webkit-scrollbar-track":{
        backgroundColor:'pink'
      },
      "&::-webkit-scrollbar-thumb":{
        backgroundColor:'blue'
      }
    }} >
        <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell sx={ProductStyle.tableHead}>Column Number</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Column Name</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Instruction</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Product Name</Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left">Name of the product<br /> </StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Brand </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the brand </Typography> <Typography>(If not found new brand with the given name will be created)</Typography></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Unit </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the unit  </span></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>

                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Category  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the Category</Typography><br /> <Typography>(If not found new category with the given name will be created)</Typography>	</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Sub category </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the Sub-Category </Typography> <Typography>(If not found new sub-category with the given name under the parent Category will be created)</Typography>	</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>SKU </Typography> <Typography>(Optional)</Typography></Box>		</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Product SKU. If blank an SKU will be automatically generated </Typography></Box>	 </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">7</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Barcode Type</Typography> <Typography>(Optional, Default: C128)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Barcode Type for the product.</Typography><Typography sx={ProductStyle.importTableBoldText}>Currently supported: C128, C39, EAN-13, EAN-8, UPC-A, UPC-E, ITF-14</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">8</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Manage Stock? </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Enable or disable stock managemant</Typography><Typography sx={ProductStyle.importTableBoldText}>1 = Yes <br /> 0 = No</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">9</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Alert quantity</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Alert quantity</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">10</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Expires in</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Product expiry period (Only in numbers)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">11</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Expiry Period Unit</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Unit for the expiry period</Typography><Typography sx={ProductStyle.importTableBoldText}>Available Options: days and months</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">12</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Applicable Tax</Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the Tax Rate</Typography><Typography sx={ProductStyle.importTabledata}>If purchase Price (Excluding Tax) is not same as Purchase Price (Including Tax) then you must supply the tax rate name.</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">13</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Selling Price Tax Type </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Product Type</Typography><Typography sx={ProductStyle.importTableBoldText}>Available Options: inclusive, exclusive</Typography></Box></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">14</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Product Type</Typography> <Typography>(Required)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the Tax Rate</Typography><Typography sx={ProductStyle.importTabledata}>If purchase Price (Excluding Tax) is not same as Purchase Price (Including Tax) then you must supply the tax rate name.</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">15</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Variation Name</Typography> <Typography>(Required if product type is variable)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Name of the variation (Ex: Size, Color etc )</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">16</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Variation Values </Typography> <Typography>(Required if product type is variable)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Values for the variation separated with '|'</Typography><Typography>(Ex: Red|Blue|Green)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">17</StyledTableCell>
                <StyledTableCell  align="left"><Typography sx={ProductStyle.importTabledata}>	Purchase Price (Including  Tax)</Typography> <Typography>(Required if Purchase Price Including Tax is not given)</Typography></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}> Purchase Price (Excluding Tax) (Only in numbers)</Typography><Typography>For variable products '|' separated values with the same order as Variation Values (Ex: 84|85|88)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">18</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Purchase Price (Excluding Tax)</Typography> <Typography>(Required if product type is variable)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Purchase Price (Excluding Tax) (Only in numbers)</Typography><Typography sx={ProductStyle.importTableBoldText}>If blank default profit margin for the business will be used</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">19</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Profit Margin % </Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Profit Margin (Only in numbers)</Typography><Typography sx={ProductStyle.importTabledata}>If purchase Price (Excluding Tax) is not same as Purchase Price (Including Tax) then you must supply the tax rate name.</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
             <StyledTableCell  component="th" scope="row">20</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Selling Price </Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Selling Price (Only in numbers)</Typography><Typography sx={ProductStyle.importTabledata}>If blank selling price will be calculated with the given Purchase Price and Applicable Tax</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
             <StyledTableCell  component="th" scope="row">21</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Opening Stock </Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Opening Stock (Only in numbers)</Typography><Typography sx={ProductStyle.importTabledata}>For variable products separate stock quantities with '|' (Ex: 100|150|200)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
             <StyledTableCell  component="th" scope="row">22</StyledTableCell>
                <StyledTableCell  align="left"><Typography sx={ProductStyle.importTabledata}>Opening Stock location </Typography> <Typography>(Optional)</Typography></StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Name of the business location</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">23</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Expiry Date</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Stock Expiry Date</Typography><Typography sx={ProductStyle.importTableBoldText}>Format: mm-dd-yyyy; Ex: 11-25-2018</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">24</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Enable Product description, IMEI or Serial Number </Typography> <Typography> (Optional, Default: 0)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTableBoldText}>1 = Yes0 = No</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">25</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Weight </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Optional</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">26</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Rack  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>Rack details seperated by '|' for different business locations serially. (Ex: R1|R5|R12)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">27</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Row  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Row details seperated by '|' for different business locations serially. (Ex: ROW1|ROW2|ROW3)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">28</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Position  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Position details seperated by '|' for different business locations serially. (Ex: POS1|POS2|POS3)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">29</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Image   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Image name with extension.(Image name must be uploaded to the server public/uploads/img )</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">30</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Product Description   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell  component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">31</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field1   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell  component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">32</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field2   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell  component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">33</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field3   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell  component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">34</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field4   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell  component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">35</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Not for selling </Typography> <Typography> (Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTableBoldText}>1 = Yes0 = No</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">36</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Product locations    </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Comma separated string of business location names where product will be available</Typography></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
    </Box>
    );
    
}

function ImportProducts(){
    return(
        <Box sx={{display:'flex'}} >
            <Sidebar />
            <Box sx={{width:'100%',overflowX:'hidden'}}>
                <Box component="main" sx={{ padding: '30px',}}><br /><br />
                  <ImportProductslist />
                </Box>
            </Box>
        </Box>
    );
}
export default ImportProducts;