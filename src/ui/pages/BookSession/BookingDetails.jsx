import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Title } from '../../../components/common/Title'
import Calendar from 'react-calendar';



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
            <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: { xs: '5px 1px', md: '10px 30px' }, cursor: 'pointer' }}    >
              Audio Call
            </Button>
            <Button variant='contained' sx={{ bgcolor: '#FFFFFF', color: '#3E0343', textTransform: 'inherit', padding: { xs: '5px 1px', md: '10px 30px' }, cursor: 'pointer' }}   >
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
        <Grid container spacing='10px' margin='10px' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
          <Grid item sm='10' md='10' lg='6' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{
              width: '60%',
              backgroundColor: 'gray',
              borderRadius: '10px',
              fontFamily: 'montserrat',
              textDecoration: 'none',
              fontSize: { xs: '10px', sm: '15px' },
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: '30px'
            }}>
              <Calendar />
            </Box>
          </Grid>
          <Grid item lg='6' md='10' sm='12' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', flexDirection: 'column' }}>
            <Box padding='20px' bgcolor='#321F36' borderRadius={5} marginX='10px' >
              <Box >
                {Data1.map((item, index) =>
                  <Button key={index} variant='contained' sx={{ bgcolor: '#FFFFFF', color: 'black', margin: { xs: '5px', sm: '10px' } }}   >{item.title}</Button>
                )}
              </Box>
              <Box >
                {Data2.map((item, index) =>
                  <Button key={index} variant='contained' sx={{ bgcolor: '#FFFFFF', color: 'black', margin: { xs: '5px', sm: '10px' } }}    >{item.title}</Button>
                )}
              </Box>
              <Box >
                {Data3.map((item, index) =>
                  <Button key={index} variant='contained' sx={{ bgcolor: '#FFFFFF', color: 'black', margin: { xs: '5px', sm: '10px' } }}    >{item.title}</Button>
                )}
              </Box>
              <Box >
                {Data4.map((item, index) =>
                  <Button key={index} variant='contained' sx={{ bgcolor: '#FFFFFF', color: 'black', margin: { xs: '5px', sm: '10px' } }}   >{item.title}</Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <br />
        <Typography color='#FFFFFF99' >
          *Sunday sessions need to be Pre-booked as early as possible
        </Typography>

        <br /> <br />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '30px' }}>
          <NavLink
            style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
            to="/TarrotReading"
          >
            <Button size="large" variant="outlined"   >
              Back
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
            to="/Payment"
          >
            <Button size="large" variant="contained"     >
              Next
            </Button>
          </NavLink>
        </Box>

        <br /> <br />
      </Container>
    </Box>
  )
}


const Data1 = [
  {
    title: '1'
  },
  {
    title: '2'
  },
  {
    title: '3'
  },
  {
    title: '4'
  },
]
const Data2 = [
  {
    title: '5'
  },
  {
    title: '6'
  },
  {
    title: '7'
  },
  {
    title: '8'
  },
]
const Data3 = [
  {
    title: '9'
  },
  {
    title: '10'
  },
  {
    title: '11'
  },
  {
    title: '12'
  },
]
const Data4 = [
  {
    title: '13'
  },
  {
    title: '14'
  },
  {
    title: '15'
  },
  {
    title: '16'
  },
]









