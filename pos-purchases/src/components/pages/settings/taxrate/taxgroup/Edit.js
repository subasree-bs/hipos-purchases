import React,{useState} from 'react';
import { TextField,Button,DialogActions, Grid,DialogContent ,Box,Dialog,DialogTitle} from '@mui/material';
import {FaEdit} from 'react-icons/fa'
import { userStyle } from '../../../PageStyle';


function TaxGrpEdit(){
    const [hidden, setHidden] = useState(true);

    //  dropdown 
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

return(
<>
<Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonedit} color="primary"><FaEdit/>&ensp;EDIT</Button>

    <Dialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={handleClose}
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit tax group
        </DialogTitle>
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
                <Grid container>
                        <Grid item sm={12} md={12}>
                                <TextField id="outlined-required" fullWidth label="Name" size="small" />

                            </Grid>
                        </Grid>
        
                <Grid container>
                     <Grid item sm={12} md={12}>
                            <TextField id="outlined-required" fullWidth label="Sub taxes" size="small" />
                            </Grid>
                        </Grid>
                        <br />
             
                 

    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} >
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

</>


);

}
export default TaxGrpEdit;