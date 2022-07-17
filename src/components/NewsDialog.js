import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent, Typography, Dialog, DialogTitle } from '@material-ui/core';

function NewsDialog(props) {
    const { open, setOpen, newsData }=props;
  return (
    <Dialog onClose={()=>{setOpen(false)}} aria-labelledby="simple-dialog-title" open={open} >
        <DialogTitle style={{minWidth:300}}>
            <div style={{display:"flex",justifyContent: "space-between"}}>
                <Typography style={{fontSize:"20px",fontWeight:"bold"}}>{newsData.title}</Typography>
            </div>
        </DialogTitle>
        <DialogContent>
            {newsData.detail}
        </DialogContent>
    </Dialog>
  );
}

NewsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  newsData: PropTypes.object.isRequired,
};

export default NewsDialog