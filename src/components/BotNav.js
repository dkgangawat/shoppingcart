import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home, Person } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Filter from './Filter';
import { Box } from '@mui/system';

export default function BotNav() {
  const [value, setValue] = React.useState('recents');
  const [active ,setActive]= React.useState(false)
  const toggleDrawer=()=>{
    setActive(!active)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <BottomNavigation sx={{ width: "100%",display:{xs:"flex",sm:"none"} ,bgcolor:"#E7E9EB",position:"fixed",mt:11,bottom:"0px"}} value={value} onChange={handleChange}>
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/"
        value="recents"
        icon={<Home />}
       
      />
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/wishlist"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/login"
        value="nearby"
        icon={<Person/>}
      />
      <BottomNavigationAction  onClick={toggleDrawer} value="Menu" icon={<MenuIcon />} />
      <Filter active={active} toggleDrawer={toggleDrawer}/>
    </BottomNavigation>
    <Box sx={{width:"100vw",mt:9,height:"0px"}}/>
    </>
  );
}
