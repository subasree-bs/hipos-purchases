import React,{useState} from 'react';
import { MenuItem,TextField,IconButton,DialogActions,DialogContent,DialogTitle,Dialog,Button, Grid ,Box,Typography ,InputLabel,FormControl,OutlinedInput,InputAdornment,Table,FormControlLabel,Checkbox,FormGroup,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaTrash,FaFileExcel,FaPrint,FaEdit,FaFilePdf} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai';
import CloseIcon from '@mui/icons-material/Close';
import { userStyle } from '../../../PageStyle';


function Edit(){
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
    <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonedit} ><FaEdit/>&ensp;EDIT</Button>

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
        Edit Tax Rate
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
            <br />
                <Grid container>
                     <Grid item sm={12} md={12}>
                              <FormControl variant="outlined" size="small" fullWidth sx={{width:'95%',marginLeft:'9px'}}>
                                                <InputLabel htmlFor="outlined-adornment-password">Tax Rate %</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                       
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end" >
                                                                    <FcInfo />
                                                                </IconButton>
                                                            </InputAdornment>
                                                   
                                                    }
                                                    label="Tax Rate %"
                                                />
                                            </FormControl>
                                    </Grid>
                        </Grid>
                        <br />
                <Grid container>
                     <Grid item sm={12} md={12}>
                        <FormGroup>
                        <FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox  />} label={<div>For tax group only <FcInfo/></div>}/>
                        </FormGroup> <br />
                    
                    </Grid>
                </Grid>

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
export default Edit;