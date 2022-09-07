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

// checkbox
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// animation
import Zoom from '@mui/material/Zoom';



//Style
import {ProductStyle} from '../ProductStyle';


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
  const baseunit = [
    {
        value: 'Selece base unit',
        label: 'Selece base unit',
      },
    {
      value: 'Pieces (Pc(s))',
      label: 'Pieces (Pc(s))',
    },
 
   
  ];
// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={500} ref={ref} {...props} />;
});
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


function Unitedit(){
    const [hidden, setHidden] = useState(true);

//  dropdown 
const [currency, setCurrency] = useState('');

const handleChange = (event) => {
  setCurrency(event.target.value);
};
  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
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
          Edit Unit
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField
          required
          id="outlined-required"
          label="Name:"
          size="small"
        />
          <TextField
          required
          id="outlined-required"
          label="Time base unit"
          size="small"
        />

        <TextField
         required
          id="outlined-select-currency"
          select
          label="Allow Decimal"
          size="small"
          value={currency}
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
      <FormGroup>
      <FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox  />} label="Add as multiple of other unit " />
    </FormGroup><br />
    {!hidden ?
    <Grid container spacing={2}>
        <Grid item xs={2}><br />
        <label htmlFor="">1 Unit :</label>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            id="outlined-required"
            label="Short name:"
            size="small"
          /> 
        </Grid>
        <Grid item xs={4}>
            <TextField
            required
              id=""
              select
              label="Base Unit"
              size="small"
              value={baseunit}
          
            
            >
              {baseunit.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        </Grid>
      </Grid>
          : null }
  
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={edithandleClose} sx={ProductStyle.modalsavebtn}>
            Save
          </Button>
          <Button  variant="outlined" sx={ProductStyle.modalclosebtn} autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>


</>
);

}
export default Unitedit;