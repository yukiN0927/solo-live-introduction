import React from 'react';
import { BottomNavigation } from "@material-ui/core";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from './Search'
import News from './News';


function Top() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div>
                <AppBar 
                    position="static" 
                    style={{
                        background:"linear-gradient(#000000,#FFFFFF)",
                        boxShadow:"none",
                        right:0 , left:0, top:0, position:"fixed"
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" >
                            配信マッチング(仮)
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            {value === 1 && <News />}
            {value === 0 && <Search />}
            <div style={{ right:0 , left:0, bottom:0, position:"fixed"}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="Seach" icon={<SearchIcon />} />
                    <BottomNavigationAction label="News" icon={<SearchIcon />} /> 
                </BottomNavigation>
            </div>
        </>
    )
}

export default Top;