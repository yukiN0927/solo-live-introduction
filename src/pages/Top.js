import React from 'react';
import { BottomNavigation, IconButton } from "@material-ui/core";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StorageIcon from '@mui/icons-material/Storage';
import ChatIcon from '@mui/icons-material/Chat';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from './Search'
import News from './News';
import frees from './images/Frees.png';


function Top() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div>
                <AppBar 
                    position="static" 
                    style={{
                        background:"#FFFFFF",
                        right:0 , 
                        left:0, 
                        top:0, 
                        position:"fixed",
                        minHeight:"100px"
                    }}
                >
                    <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{display:"flex"}}>
                            <img src={frees} alt="真央" style={{maxHeight:"100px", marginRight:"20px"}} />
                            <Typography variant="h6" style={{color:"#000000",fontWeight:"bold", fontSize:"80px" }}>
                                Free's
                            </Typography>
                        </div>
                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <SearchIcon onClick={()=>{setOpen(true)}} style={{fontSize:"80px"}}/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            {value === 0 && <Search open={open} setOpen={setOpen}/>}
            {value === 1 && <News />}
            {value === 2 && <div　style={{marginTop:"70px"}}>準備中</div>}
            {value === 3 && <div　style={{marginTop:"70px"}}>準備中</div>}
            <div style={{ right:0 , left:0, bottom:0, position:"fixed"}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                    style={{minHeight:"200px",justifyContent:"space-between"}}
                >
                    <BottomNavigationAction label="Seach" icon={<SearchIcon style={{fontSize:"150px"}} />} />
                    <BottomNavigationAction label="News" icon={<NewspaperIcon style={{fontSize:"150px"}} />} /> 
                    <BottomNavigationAction label="Communication" icon={<ChatIcon style={{fontSize:"150px"}} />} /> 
                    <BottomNavigationAction label="MineCraft" icon={<StorageIcon style={{fontSize:"150px"}} />} /> 
                </BottomNavigation>
            </div>
        </>
    )
}

export default Top;