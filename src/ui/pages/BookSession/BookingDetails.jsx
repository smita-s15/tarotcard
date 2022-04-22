import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../../components/common/Title'
import Calendar from 'react-calendar'

export const BookingDetails = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '100px', marginX: 'auto' }}>
      <Container fixed sx={{ padding: { xs: '10px auto', md: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', width: '80%' }}>
        <br /><br />
        <Title>Booking Details</Title>
        <br /><br />
        <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', width: '90%', marginX: '20px', gap: '20px' }}>
          <Box width='60%'>
            <Typography variant='h2' color='#FFD76D'>
              Session Mode
            </Typography>
            <br />
            <Typography color='#FFFFFF99' textAlign='left' >
              *Video call services add an additional payment of 300/- than the actual session price
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '10px' }}>
            <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: { xs: '5px 1px', md: '10px 30px' }, cursor: 'pointer' }}  >
              Audio Call
            </Button>
            <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: { xs: '5px 1px', md: '10px 30px' }, cursor: 'pointer' }}>
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
        <br />  <br />
        <Grid container >
          <Grid item xs='8' lg='5' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1em' }}>
            <Box width='50%' bgcolor='#FFFFF'>
              <Calendar />
            </Box>
          </Grid>
          <Grid item lg='6'>

          </Grid>
        </Grid>
        <br />
        <Typography color='#FFFFFF99' >
          *Sunday sessions need to be Pre-booked as early as possible
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
          <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D',  margin: '20px', width: '170px' }} >
            <Link style={{ color: '#FFD76D', textDecoration: 'none' }} to="/TarrotReading">
              Back
            </Link>
          </Button>
          <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', margin: '20px', width: '170px', cursor: 'pointer' }} >
            <Link style={{ color: '#000', textDecoration: 'none' }} to="/Payment">
              Proceed to Payment
            </Link>
          </Button>
        </Box>
        <br /> <br />
      </Container>
    </Box>
  )
}










