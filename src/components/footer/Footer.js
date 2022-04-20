import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook } from 'react-icons/fa';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', borderTop:'1px solid #FFD76D', color:'#FFD76D', flexDirection:'column', gap:'30px', position:'relative', mt:'10%' }}>
        <Box>
        <br />
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'30px'}}>
                <InstagramIcon style={{height:'60px', width:'60px'}} />
                <FaFacebook style={{height:'50px', width:'50px'}} />
                <TwitterIcon style={{height:'60px', width:'60px'}} />
            </Box>
            <br />
            <Typography color='#FFD76D' >
                support: eclecticdivinationsbyraina@gmail.com
            </Typography>
        </Box>
        <Box bgcolor='#FFD76D'  width='100%' textAlign='center' padding='10px'>
            <Typography color='#230224'>
                tarot card reading Copyright 2022. All rights Reserved.
            </Typography>
        </Box>
    </Box>
  )
}
