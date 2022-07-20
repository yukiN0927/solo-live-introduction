import React from 'react';
import SeachDialog from '../components/SeachDialog';
import SeachTable from '../components/SearchTable';
import { data } from '../members/data/data'
import PropTypes from 'prop-types';

function Search(props){
    const { open, setOpen }=props;
    const [tableValue, setTableValue] = React.useState(data);
    return(
        <>
            {open?<SeachDialog open={open} setOpen={setOpen} setTableValue={setTableValue} />:""}
            <SeachTable tableValue={tableValue}/>
        </>
    )
}

Search.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Search;