import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook } from 'react-icons/fa';
import TwitterIcon from '@mui/icons-material/Twitter';

export const BookingDetails = () => {
  return (
    <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px', border: '2px solid #FFD76D', borderRadius: '16px', mt: '100px' }}>
      <br /><br />
      <Title>Booking Details</Title>
      <br /><br />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginX: '20px' }}>
        <Box width='70%'>
          <Typography variant='h2' color='#FFD76D'>
            Session Mode
          </Typography>
          <br />
          <Typography color='#FFFFFF99' textAlign='left' >
            *Video call services add an additional payment of 300/- than the actual session price
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: '10px 30px' }}>
            Audio Call
          </Button>
          <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: '10px 30px' }}>
            Video Call
          </Button>
        </Box>
      </Box>
      <br />  <br />
      <Box width='90%'>
        <Typography variant='h2' color='#FFD76D' textAlign='left'>
          Select Date And Time
        </Typography>
      </Box>
      <Typography color='#FFFFFF99' >
        *Sunday sessions need to be Pre-booked as early as possible
      </Typography>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', margin: '20px', width: '170px' }} >
          Back
        </Button>
        <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', margin: '20px', width: '170px' }} >
          Proceed To Payment
        </Button>
      </Box>
      <br /> <br />
    </Container>
  )
}










