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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            配信マッチング(仮)
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            {value === 1 && <Search />}
            {value === 0 && <News />}
            <div style={{ right:0 , left:0, bottom:0, position:"absolute"}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="News" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Seach" icon={<SearchIcon />} />
                </BottomNavigation>
            </div>
        </>
    )
}

export default Top;