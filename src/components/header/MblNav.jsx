import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { NavLink } from 'react-router-dom';

export const MobileMenuBar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'block', lg: 'none', } }} onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: '#FFD76D', height:'30px', width:'30px' , display:'flex'}} />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: "rgba( 19, 11, 70, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: 'auto',
            borderRadius: '20px',
            textAlign: 'center',
            gap: '10px',
            marginX: "auto",
            alignItems: 'center',
            marginTop:'10px'
          }
        }}
      >
        {data?.map((item, index) => {
          return <Box key={index} sx={{ display: 'flex', justifyContent: 'center', marginX: 'auto', alignItems: 'center', flexDirection: 'column',   }}  >
            <NavLink
              onClick={toggleDrawer(false)}
              style={({
                fontFamily: "Overpass",
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "19px",
                color:'#FFD76D',
                textDecoration: 'none',
                margin:'10px', cursor:'pointer'

              })}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </Box>
        })}
      </SwipeableDrawer>
    </>
  );
}

const data = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "What I do",
        link: "/WhatIDo"
    },
    {
        title: "Book Sessions ",
        link: "/BookSessions"
    },
    {
        title: " Services",
        link: "/Service"
    },
    {
        title: " Contact",
        link: "/Contact"
    },
]