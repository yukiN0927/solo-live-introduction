import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button, DialogContent, Typography } from '@material-ui/core';
import { data } from '../members/data/data'
import { masterData } from '../members/data/masterData'
import SeachAccordion from './SeachAccordion';

function SeachDialog(props) {
    const {open,setOpen,setTableValue}=props;
    const [gender, setGender] = React.useState("");
    const [game, setGame] = React.useState("");
    const [genre, setGenre] = React.useState("");
    

    const clearOnClick = () =>{
        setGender("");
        setGame("");
        setGenre("");
    }


    useEffect(()=>{
        let SeachValue = data
        if(gender!==""){
            SeachValue = SeachValue.filter(data => data.gender === gender)
        }
        if(game!==""){
            SeachValue = SeachValue.filter(data => data.game.filter(value => value === game).length === 1)
        }
        if(genre!==""){
            SeachValue = SeachValue.filter(data => data.genre === genre)
        }
        setTableValue(SeachValue)
    }
    ,[gender,game,genre,setTableValue])

  return (
    <Dialog onClose={()=>{setOpen(false)}} aria-labelledby="simple-dialog-title" open={open} >
        <DialogTitle style={{minWidth:300}}>
            <div style={{display:"flex",justifyContent: "space-between"}}>
                <Typography>検索</Typography>
                <Button variant="contained" color="primary" onClick={()=>{clearOnClick()}}>
                    clear
                </Button>
            </div>
        </DialogTitle>
        <DialogContent>
            <SeachAccordion title="性別" option={masterData[0].data} value={gender} setvalue={setGender} />
            <SeachAccordion title="ゲーム" option={masterData[1].data} value={game} setvalue={setGame} />
            <SeachAccordion title="ジャンル" option={masterData[2].data} value={genre} setvalue={setGenre} />
        </DialogContent>
    </Dialog>
  );
}

SeachDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setTableValue: PropTypes.func.isRequired,
};

export default SeachDialog