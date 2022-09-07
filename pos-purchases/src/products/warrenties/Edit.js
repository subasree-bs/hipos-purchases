import React,{ useState} from 'react';
import { Button, Grid ,Typography } from '@mui/material';


// dialogbox
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {FaEdit} from 'react-icons/fa'

// inputfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


// animation
import Zoom from '@mui/material/Zoom';



//Style
import {ProductStyle} from '../ProductStyle';



// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={500} ref={ref} {...props} />;
});

//  DROPDOWN 
const currencies = [
    {
        value: 'Please Select',
        label: 'Please Select',
      },
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    },
   
  ];
// Dialog THEME
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

//modal
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


function Warrentyedit(){

  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
  };

  //  dropdown 
  const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

return(
  <>
  <Button variant="contained" onClick={edithandleClickOpen} size="small" sx={{ textTransform: 'Capitalize'}}><FaEdit></FaEdit>&ensp;Edit&ensp;</Button>

  <BootstrapDialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={edithandleClose}
        open={editopen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={edithandleClose}>
          Edit
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #B97DF0',
      },
      }}
      noValidate
      autoComplete="off"
    >

<TextField
          required
          id="outlined-required"
          label="Name"
          size="small"
        />
    
        <TextField
            placeholder="Description"
            label="Description"
            multiline
            rows={2}
            maxRows={4}
            />
            <br />
     <Grid container spacing={0}>
        <Grid item xs={5}>
             <TextField
                placeholder="Description"
                label="Description"
              
                />
          </Grid>
          <Grid item xs={7}>
          <TextField
                required
                  id="outlined-select-currency"
                  select
                  label="Allow Decimal"
                  value={currency}
                  onChange={handleChange}
                 
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
            </Grid>
          
          </Grid>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={edithandleClose}>
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

</>
);

}
export default Warrentyedit;