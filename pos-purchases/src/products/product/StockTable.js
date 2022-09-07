import * as React from "react";
import { useState } from "react";
import { styled,  } from "@mui/material/styles";
import { Grid, Button,Table,TableBody,
   TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
   DialogContent,DialogActions,tableCellClasses} from "@mui/material";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { FaPrint, FaFilePdf,FaFileExcel,} from "react-icons/fa";
import {prodStyle, prodList} from "./ProductStyle";
// import { StyledTableRow, StyledTableCell} from '../../Table';


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
  
  // Table 2 - Stock Report - Row creation function
  function createData2( sr_sku, sr_product, sr_location, sr_unitprice, sr_currentstock, 
    sr_currentstock_pp, sr_currentstock_sp, sr_potentialprofit, sr_totalunitsold, 
    sr_totalunittransferred, sr_totalunitadjusted) 
    {
    return { sr_sku, sr_product, sr_location, sr_unitprice, sr_currentstock, 
      sr_currentstock_pp, sr_currentstock_sp, sr_potentialprofit, sr_totalunitsold, 
      sr_totalunittransferred, sr_totalunitadjusted,
    };
  }
  
  const rows2 = [
    createData2( "Frozen yoghurt", 159, 6.0, 24, 4.0, "Frozen yoghurt", 159, 6.0, 24, 4.0, 78 ),
    createData2( "Ice cream sandwich", 237, 9.0, 37, 4.3, "Ice cream sandwich", 237, 9.0, 37, 4.3, 79 ),
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
  

export default function StockReportTable(){

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

    return(

        <TableContainer component={Paper} sx={{  }}>
        <Grid container sx={{ justifyContent: "center",}} >
            <Grid>
            <>
              <Button variant="outlined" sx={prodList.button_grp}>&ensp;<FaFileExcel/> Export to CSV&ensp;</Button>
              <Button variant="outlined" sx={prodList.button_grp}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
              <Button variant="outlined" sx={prodList.button_grp}>&ensp;<FaPrint/> Print&ensp;</Button>
              <Button variant="outlined" sx={prodList.button_grp}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
            </>
            </Grid>
          </Grid>
          
          <Table id="example2" sx={{}} aria-label="simple table">
            <TableHead sx={{ fontWeight: "600", fontSize: "14px" }}>
              <StyledTableRow>
                <StyledTableCell >SKU</StyledTableCell>
                <StyledTableCell >Product</StyledTableCell>
                <StyledTableCell >Location</StyledTableCell>
                <StyledTableCell sx={{  width: 180 }}>Unit Price</StyledTableCell>
                <StyledTableCell >Current Stock</StyledTableCell>
                <StyledTableCell sx={{  width: 180 }}>Current Stock Value (By purchase price)</StyledTableCell>
                <StyledTableCell sx={{  width: 180 }}>Current Stock Value (By sale price)</StyledTableCell>
                <StyledTableCell >Potential Profit</StyledTableCell>
                <StyledTableCell >Total Unit Sold</StyledTableCell>
                <StyledTableCell >Total Unit Tranferred</StyledTableCell>
                <StyledTableCell >Total Unit Adjusted</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow key={row.sr_sku} >
                  <TableCell component="th" scope="row">{row.sr_sku}</TableCell>
                  <TableCell>{row.sr_product}</TableCell>
                  <TableCell>{row.sr_location}</TableCell>
                  <TableCell>
                    {row.sr_unitprice}
                    <br />

          {/* View Group Prices Modal */}

                    <Button  variant="outlined"  onClick={handleClickModalOpen}  
                    size="small"  sx={prodList.viewbtn} >
                      View group prices
                    </Button>
                    <BootstrapDialog
                      onClose={handleModalClose}
                      aria-labelledby="customized-dialog-title"
                      open={ModalOpen}
                      sx={{
                        "& .MuiDialog-paper": {
                          marginTop: "-330px",
                          transformOrigin: "0 0 0",
                        },
                      }}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleModalClose}
                        sx={{ minWidth: 600 }}
                      >
                        Product
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <Table>
                          <TableRow sx={{ backgroundColor: "#2dce89", m: 0, p: 0 }}>
                            <TableCell sx={{ color: "#fff" }}>
                              Default Selling Price (Inc. tax)
                            </TableCell>
                          </TableRow>
                          <TableRow sx={{ backgroundColor: "#d2d6de" }}>
                            <TableCell>₹ 2,343.75</TableCell>
                          </TableRow>
                        </Table>
                        <br />
                      </DialogContent>
                      <DialogActions>
                        <Button  autoFocus  onClick={handleModalClose}  variant="outlined"
                          sx={{
                            backgroundColor: "#f4f4f4",
                            borderColor: "#ddd",
                            color: "#444",
                          }}
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </BootstrapDialog>
                  </TableCell>

        {/* View Group Prices Modal Ends */}

                  <TableCell>{row.sr_currentstock}</TableCell>
                  <TableCell>{row.sr_currentstock_pp}</TableCell>
                  <TableCell>{row.sr_currentstock_sp}</TableCell>
                  <TableCell>{row.sr_potentialprofit}</TableCell>
                  <TableCell>{row.sr_totalunitsold}</TableCell>
                  <TableCell>{row.sr_totalunittransferred}</TableCell>
                  <TableCell>{row.sr_totalunitadjusted}</TableCell>
                </TableRow>
              ))}
              {/* <TableRow className="table2_total">
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{ fontWeight: 700, fontSize: 18, color: "black" }}
                >
                  Total:{" "}
                </TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>18.00</TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>
                  ₹ 30,078.16
                </TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>
                  ₹ 46,687.50
                </TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>
                  ₹ 16,609.34
                </TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>13.00</TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
                <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
    )
}