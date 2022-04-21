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
        PaperProps={{
          sx: {
            background: "rgba( 19, 11, 70, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: 'auto',
            textAlign: 'center',
            gap: '10px',
            marginX: "auto",
            alignItems: 'center',
            color:'#FFD76D'
          }
        }}
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




