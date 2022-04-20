import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <AppBar position='static' color='transparent' sx={{ boxShadow: 'none', }}>
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between',margin: '20px 30px',  }}>
                <NavLink to="/" style={{justifyContent:'center', display:'flex'}} >
                    <img src={require("../../ui/assets/common/tarot card reading.png")} alt="" style={{ width: '100%' }} />
                </NavLink>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px',color: '#FFD76DE8' }}>
                    {data.map((item, index) =>
                        <NavLink key={index} to={item.link}
                            style={{
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "15px",
                                lineHeight: "18.29px",
                                fontFamily: "monteserrat",
                                textDecoration: 'none',
                                color: '#FFD76D'
                            }}
                        >
                            {item.title}
                        </NavLink>
                    )}
                </Box>
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
        title: "Book Sessions",
        link: "#"
    },
    {
        title: "Services",
        link: "#"
    },
    {
        title: "Contacts",
        link: "/Contact"
    },
]