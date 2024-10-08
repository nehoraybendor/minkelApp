import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon  from '@mui/icons-material/close';

export default function SimpleSnackbar() {
 const [open, setOpen] = React.useState(false);

 const handleClick = () => {
  setOpen(true);
 };

 const handleClose = (
  event: React.SyntheticEvent | Event,
  reason?: SnackbarCloseReason,
 ) => {
  if (reason === 'clickaway') {
   return;
  }

  setOpen(false);
 };

 const action = (
  <React.Fragment>
   {/* <Button color="primary" size="small" onClick={handleClose}>
    UNDO
   </Button> */}
   <IconButton
    size="small"
    aria-label="close"
    color="success"
    onClick={handleClose}
   >
    <CloseIcon fontSize="small" />
   </IconButton>
  </React.Fragment>
 );

 return (
  <div>
   <Button variant='outlined' sx={{mt:3,}} color='inherit' onClick={handleClick}>שלח דיווח</Button>
   <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
   sx={{color:'success'}}
    message="הדיווח נשמר בהצלחה"
    
    action={action}
   />
  </div>
 );
}
