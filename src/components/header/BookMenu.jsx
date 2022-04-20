import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery } from '@mui/material';

export default function BookMenu() {

  const matches = useMediaQuery('(min-width:900px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Typography
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={({
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: "18.29px",
          fontFamily: "monteserrat",
          textDecoration: 'none',
          color: '#FFD76D'
        })}
      >
        Book Sessions
      </Typography>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          component="a"
          href='/TarrotReading'
        >
          Tarrot Reading Sessions
        </MenuItem>
        <MenuItem
          component="a"
          href='/BookingDetails'
        >
          Booking Details
        </MenuItem>
        <MenuItem
          component="a"
          href='/Payment'
        >
          Payment Details
        </MenuItem>
      </Menu>
    </div>
  );
}




