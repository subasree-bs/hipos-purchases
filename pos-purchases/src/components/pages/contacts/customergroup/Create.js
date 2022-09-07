import React,{ useState} from 'react';
import { Box,TextField,Button,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions,IconButton } from '@mui/material';
import { userStyle } from '../../PageStyle';


function CustomorGroupcreate(){

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
    <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonadd} >Add</Button>
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
          Add Customer Group
        </DialogTitle>
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
          label="Customer Group Name"
          size="small"
        />
         <TextField
            required
              id=""
              select
              label="Price calculation type"
              size="small"
             >
             
            <MenuItem value="all">All</MenuItem>
          </TextField>
        <TextField
            placeholder="Description"
            size="small"
            label="Calculation Percentage (%):"
          
            />
        
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose} color="success">
            Save
          </Button>
          <Button  variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

</>


);

}
export default CustomorGroupcreate;