import React from 'react';
import {IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SeachDialog from '../components/SeachDialog';
import SeachTable from '../components/SearchTable';
import { data } from '../members/data/data'

function Search(){
    const [open, setOpen] = React.useState(false);
    const [tableValue, setTableValue] = React.useState(data);
    return(
        <>
            {open?<SeachDialog open={open} setOpen={setOpen} setTableValue={setTableValue} />:""}
            <div>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <SearchIcon onClick={()=>{setOpen(true)}}/>
                </IconButton>
            </div>
            <SeachTable tableValue={tableValue}/>
        </>
    )
}

export default Search;