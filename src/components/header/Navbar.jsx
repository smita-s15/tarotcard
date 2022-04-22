import { AppBar, Box, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import "@fontsource/montserrat";
import { MobileMenuBar } from './MblNav';

export const Navbar = () => {

    return (
        <AppBar position='fixed' color='transparent' sx={{ boxShadow: '0', mt: '15px' }}>
            <Toolbar variant='dense' 
                sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',                   
                    alignContent: 'center', 
                    marginX: '10px', 
                    bgcolor: '#250D25',                 
                    background: "rgba( 19, 11, 70, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    WebkitBackdropFilter: "blur( 4px )",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    height: 'auto',
                    borderRadius: '20px',
                    textAlign: 'center',
                }}>
                <NavLink to="/"
                    style={{
                        fontStyle: "normal",
                        fontFamily: 'Bohemian Soul',
                        fontWeight: 600,
                        fontSize: { xs: '15px', md: "20px" },
                        lineHeight: "27px",
                        textDecoration: 'none',
                        color: '#FFD76D',
                        cursor:'pointer'
                    }} >
                    Tarot Card Reading
                </NavLink>
                <Box flexDirection='row' sx={{ mr: 2, justifyContent: 'center', alignItems: 'center', display: { xs: 'none', lg: 'block' }, }}
                >
                    <Toolbar >
                        {data.map((item, index) =>
                            <NavLink key={index} to={item.link}
                                style={{
                                    fontStyle: "normal",
                                    fontFamily: 'montserrat',
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    lineHeight: "18px",
                                    textDecoration: 'none',
                                    color: '#FFD76D',
                                    marginLeft: "30px",
                                    cursor:'pointer'
                                }}
                            >
                                {item.title}
                            </NavLink>
                        )}
                    </Toolbar>
                </Box>
                <MobileMenuBar />
            </Toolbar>
        </AppBar>
    )
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