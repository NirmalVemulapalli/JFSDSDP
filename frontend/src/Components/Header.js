import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NavLink } from 'react-router-dom';
import HomeImage from '../images/Home.png';
const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#8b0000' }} position='sticky'>
        <Toolbar>

          <AccountBalanceIcon />
          <Typography sx={{ flexGrow: 1 }}>Online TimeTable Management</Typography>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/SignUp" label="SignUp" />
            <Tab LinkComponent={NavLink} to="/SignIn" label="SignIn" />
            <Tab LinkComponent={NavLink} to="/Student" label="Student" />
            <Tab LinkComponent={NavLink} to="/Counsellor" label="Counsellor" />
            <Tab LinkComponent={NavLink} to="/Courses" label="Courses" />
            <Tab LinkComponent={NavLink} to="/About" label="About" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
