import React,{ useState} from 'react';
import { Box,TextField,Button,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions,IconButton } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { userStyle } from '../../PageStyle';

function CustomorGroupedit(){

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
  <Button variant="contained" onClick={edithandleClickOpen} size="small" sx={userStyle.buttonedit}><FaEdit />&ensp;Edit&ensp;</Button>

  <Dialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={edithandleClose}
        open={editopen}
        // TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={edithandleClose}>
          Edit Customer Group
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
          <Button variant="contained" autoFocus onClick={edithandleClose} color="success">
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

</>
);

}
export default CustomorGroupedit;