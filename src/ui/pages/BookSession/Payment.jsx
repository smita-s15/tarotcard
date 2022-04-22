import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'
import { AiFillCreditCard } from "react-icons/ai"
import { BiTransfer } from "react-icons/bi"
import { CgPaypal } from "react-icons/cg"
import { Link } from 'react-router-dom'

export const Payment = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '100px', marginX: 'auto' }}>
      <Container fixed sx={{ padding: { xs: '10px auto', md: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', width: '80%' }}>
        <br /><br />
        <Title>Select The Payment Methods</Title>
        <br /><br /><br />
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs='12' sm='8' lg='6'>
            <Typography variant='h5' color='#FFD76D'>
              Select Payment Method
            </Typography>
            <br /> <br />
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
              <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', width: { xs: '100%' }, cursor: 'pointer' }} startIcon={<AiFillCreditCard />}  disableRipple >
                Credit Card
              </Button>
              <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', width: { xs: '100%' }, cursor: 'pointer' }} startIcon={<BiTransfer />}  disableRipple>
                Bank Transfer
              </Button>
              <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', width: { xs: '100%' }, cursor: 'pointer' }} startIcon={<CgPaypal />}  disableRipple >
                Paypal
              </Button>
            </Box>
            <br /><br />
            <PaymentForm />
          </Grid>
          <Grid item xs='12' sm='10' lg='6' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <Box bgcolor='#600060B2' sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '21px', padding: '10px 20px', gap: '10px' }}>

              <Typography variant='h4' color='#FFFFFF' >
                Your Session
              </Typography>
              <img src={require("../../assets/BookSession//Rectangle 45.png")} alt='' width='80%' />

              <Typography color='#FFFFFF' fontWeight='bold' textAlign='center' margin='20px' border='1px solid #FFFFFF' borderRadius='10px' padding='5px' width='50%'>
                20 minutes <br />999/-
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <br />
      </Container>
    </Box>
  )
}










const PaymentForm = () => {
  return (
    <form action="">
      <br />
      <div>
        <Typography gutterBottom variant="h5" color='#FFD76D' >
          Enter Card Name
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h5" color='#FFD76D' >
          Enter Card Number
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h5" color='#FFD76D' >
          Mobile Number
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h5" color='#FFD76D' >
          Enter CVV Code
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br /><br />
      <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', margin: '20px', width: '170px', cursor: 'pointer' }}  disableRipple >
        <Link style={{ color: '#FFD76D', textDecoration: 'none' }} to="/BookingDetails">
          Back
        </Link>
      </Button>
      <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', margin: '20px', width: '170px' }}  disableRipple >
        <Link style={{ color: '#000', textDecoration: 'none' }} to="#">
          Next
        </Link>
      </Button>
      <br /><br />
    </form>
  )
}



