import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography,Container,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
   Menu,Tooltip,Toolbar,Table,TableBody,
   TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
   DialogContent,DialogActions,tableCellClasses} from "@mui/material";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash, 
  FaDatabase, FaHistory, FaCopy, FaBarcode,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { visuallyHidden } from "@mui/utils";
import {Link} from "react-router-dom";
import {purchaseStyle, purchaseList} from "./PurchaseStyle";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//Actions Dropdown Button - List 
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 150,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: 14,
      "& .MuiSvgIcon-root": {
        fontSize: 15,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

// Table 2 - Stock Report - Row creation function
function createData2( action,date,referenceNo,unitLocation,supplier,purchaseStatus,paymentStatus,grandTotal,paymentDue,addedBy,) 
  {
  return { action,date,referenceNo,unitLocation,supplier,purchaseStatus,paymentStatus,grandTotal,paymentDue,addedBy,};
  }

const rows2 = [
  createData2( "Frozen yoghurt", 159, 6.0, 24, 4.0, "Frozen yoghurt", 159, 6.0, 24, 4.0, ),
  createData2( "Ice cream sandwich", 237, 9.0, 37, 4.3, "Ice cream sandwich", 237, 9.0, 37, 4.3, ),
];

//View Group Prices Modal Tags
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
          sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500], }}
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


// Accordion style
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 0,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

// Accordion Header Style
const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: "white",

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

// Accordion Body Style
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));


export default function CustomizedAccordions() {

// Filter - All Select Inputs
const [purchaseFilter, setPurchaseFilter] = useState({BusinessLocation:"",Supplier: "",
PurchaseStatus: "",PaymentStatus:"",})

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick_action = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// Accordion expand  
  const [expanded, setExpanded] = useState("panel1");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [TabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

// Table 2 - Plugin
  $(document).ready(function () {
    setTimeout(function () {
      $("#example2").DataTable({
        language: { search: "", searchPlaceholder: "Search..." },
        lengthMenu: [25, 50, 100, 200, 500, 1000],
        paging: true,
      });
    }, 1000);
  });

// Stock Report Table Modal
  const [ModalOpen, setModalOpen] = useState(false);

  const handleClickModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Purchases</Typography>
                </Grid>
            </Container>
            <br />

      {/* *****Filters Grid***** */}

    <Container>
      <Grid>
        <Grid  fullWidth sx={{ '& .MuiGrid-root':{
          paddingRight: 0,paddingLeft: 0,        }}}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
            sx={ purchaseStyle.purchaseContainer}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ color: " #7009AB" }}>
                <FilterAltIcon sx={{p:0}} /> Filters
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                
              <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                  <Typography>
                    <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">
                        Business Location 
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={purchaseFilter.BusinessLocation}
                        label="Business Location"
                        onChange={(event) => {
                          setPurchaseFilter({...purchaseFilter, BusinessLocation: event.target.value})
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

                <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                  <Typography>
                  <FormControl sx={ purchaseList.selectFormcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Supplier</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={purchaseFilter.Supplier}
                        label="Supplier"
                        onChange={(event) => {
                          setPurchaseFilter({...purchaseFilter, Supplier: event.target.value})
                        }}
                      >
                        <MenuItem value={"supplier_all"}>All</MenuItem>
                        <MenuItem value={"supplier_test"}>test - 11211(frf)</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                  <Typography>
                  <FormControl sx={ purchaseList.selectFormcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Purchase Status</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={purchaseFilter.PurchaseStatus}
                        label="Purchase Status"
                        onChange={(event) => {
                          setPurchaseFilter({...purchaseFilter, PurchaseStatus: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"pur_status_received"}>Received</MenuItem>
                        <MenuItem value={"pur_status_pending"}>Pending</MenuItem>
                        <MenuItem value={"pur_status_ordered"}>Ordered</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                  <Typography>
                  <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Payment Status</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={purchaseFilter.PaymentStatus}
                        label="Payment Status"
                        onChange={(event) => {
                          setPurchaseFilter({...purchaseFilter, PaymentStatus: event.target.value})
                        }}
                      >
                        <MenuItem value={"pay_status_all"}>All</MenuItem>
                        <MenuItem value={"pay_status_paid"}>Paid</MenuItem>
                        <MenuItem value={"pay_status_due"}>Due</MenuItem>
                        <MenuItem value={"pay_status_partial"}>Partial</MenuItem>
                        <MenuItem value={"pay_status_overdue"}>Overdue</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                {/* <Grid  item  md={3}  sm={6}  xs={10} sx={purchaseList.selectInput} >
                  <Typography>
                  <FormControl sx={  purchaseList.selectFormcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Brand</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={purchaseFilter.Brand}
                        label="Brand"
                        onChange={(event) => {
                          setPurchaseFilter({...purchaseFilter, Brand: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"motog"}>MotoG</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid> */}

              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      {/* ********Tabs Grid******** */}

      <>
      <br />
      <br />

      <Grid sx={ purchaseStyle.purchaseContainer } >
        <Box sx={{ typography: "body1" }}>    
            <Container>            
                  <Grid container spacing={10} sx={{ paddingTop: '15px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All Purchases</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button sx={purchaseList.add} >
                          {/* <Link to="useradd"  style={{textDecoration:'none', color: '#A5BECC'}}> */}
                          <AddIcon /> Add
                          {/* </Link> */}
                          </Button>
                    </Grid>
                </Grid>

              <TableContainer component={Paper} sx={{ }}>
                <Grid container sx={{ justifyContent: "center",}} >
                    <Grid>
                      <Button sx={purchaseList.buttonGrp}>
                        <FaFileCsv />&ensp;Export to CSV
                      </Button>
                      <Button sx={purchaseList.buttonGrp}>
                        <AiFillFileExcel />&ensp;Export to Excel
                      </Button>
                      <Button sx={purchaseList.buttonGrp}>
                        <FaPrint />&ensp;Print
                      </Button>
                      <Button sx={purchaseList.buttonGrp}>
                        <FaFilePdf />&ensp;Export to PDF
                      </Button>
                    </Grid>
                </Grid>
                  
                  <Table id="example2" sx={{}} aria-label="simple table">
                    <TableHead sx={{ fontWeight: "600", fontSize: "14px" }}>
                      <TableRow>
                        <TableCell >Action</TableCell>
                        <TableCell >Date</TableCell>
                        <TableCell >Reference No</TableCell>
                        <TableCell >Unit Location</TableCell>
                        <TableCell >Supplier</TableCell>
                        <TableCell >Purchase Status</TableCell>
                        <TableCell >Payment Status</TableCell>
                        <TableCell >Grand Total</TableCell>
                        <TableCell >Payment Due</TableCell>
                        <TableCell >Added By</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows2.map((row) => (
                        <StyledTableRow key={row.referenceNo} >
                          <StyledTableCell component="th" scope="row">{row.action}</StyledTableCell>
                          <StyledTableCell>{row.date}</StyledTableCell>
                          <StyledTableCell>{row.referenceNo}</StyledTableCell>
                          <StyledTableCell>{row.unitLocation}</StyledTableCell>
                          <StyledTableCell>{row.supplier}</StyledTableCell>
                          <StyledTableCell>{row.purchaseStatus}</StyledTableCell>
                          <StyledTableCell>{row.paymentStatus}</StyledTableCell>
                          <StyledTableCell>{row.grandTotal}</StyledTableCell>
                          <StyledTableCell>{row.paymentDue}</StyledTableCell>
                          <StyledTableCell>{row.addedBy}</StyledTableCell>
                        </StyledTableRow>
                        
                      ))}
                     
                     
                    </TableBody>
                    {/* <StyledTableRow  >
                          <StyledTableCell colSpan={7}>fgtrgtg</StyledTableCell>
                      
                          <StyledTableCell>gftrg</StyledTableCell>
                          <StyledTableCell>bhtg</StyledTableCell>
                          <StyledTableCell>tbhtr</StyledTableCell>
                        </StyledTableRow> */}

                    <TableRow sx={{backgroundColor:"#cdcdcd"}}>
                        <TableCell
                          colSpan={7}
                          align="center"
                          sx={{ fontWeight: 700, fontSize: 18, color: "black",backgroundColor:"#cdcdcd"}}
                        >
                          Total:{" "}
                        </TableCell>
                        <TableCell sx={{ color: "black", fontSize: 16,backgroundColor:"#cdcdcd"}}>₹ 0.00</TableCell>
                        <TableCell sx={{ color: "black", fontSize: 13, width:170,backgroundColor:"#cdcdcd" }}>
                            Payment Due - ₹ 0.00
                            <br />
                            Purchase Return - ₹ 0.00
                        </TableCell>
                        <TableCell sx={{ color: "black", fontSize: 16,backgroundColor:"#cdcdcd" }}></TableCell>

                      </TableRow>

                  </Table>
                </TableContainer>
<br />
</Container>
        </Box>
      </Grid>
      </>
      </Container>
    </Box>
  );
}