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


// animation
import Zoom from '@mui/material/Zoom';



//Style
import {ProductStyle} from '../ProductStyle';



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


function Variationedit(){

    //ToDOList function

const[newItem, setNewItem] = useState("");
const[items, setItems ]= useState([]);


function addItem(){
  const item={
    id:Math.floor(Math.random()*1000),
    value:newItem
  };
  setItems(oldList => [...oldList,item]);
  setNewItem("");
  console.log(items);
}
function deleteItem(id){
  const newArray=items.filter(item=>item.id !== id);
  setItems(newArray);

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
          Edit Variations
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
      <div>
        <TextField
          required
          id="outlined-required"
          label="Variation Name:"
          size="small"
        />
        
{/* TODOLIST */}
        <div className="todo">
                <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <TextField variant="outlined" size="small"
                                    className="form-control variantName"
                                    placeholder="Add an item..."
                                    label="item"
                                    value={newItem}
                                    onChange={e=> setNewItem(e.target.value)}
                                    
                                    
                                    /> 
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant="contained" size="small" onClick={()=>addItem()}>➕</Button>
                  
                        </Grid>

                    </Grid>

            <br />
              <ul type="none" className="todoLlistUl">
          
              {items.map(item=>{
                return(
                  <li  key={item.id}>

                    <Grid container spacing={2}>
                        <Grid item xs={10} style={{margin:"0",padding:"0"}}>
                            <TextField variant="outlined" size="small" label="item" value={item.value}/>&ensp;
                        </Grid>
                        <Grid item xs={2}>
                            <Button color="error" variant="contained" size="small" type="button" onClick={()=>deleteItem(item.id)}>❌</Button>
                        </Grid>

                    </Grid>
                    
                    
                    </li>
                )
              })}
              </ul>
            </div>
          {/* TODOLIST END */}
    </div>
     
    
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
export default Variationedit;