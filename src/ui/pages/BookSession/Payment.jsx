import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'
import { AiFillCreditCard } from "react-icons/ai"
import { BiTransfer } from "react-icons/bi"
import { CgPaypal } from "react-icons/cg"

export const Payment = () => {
  return (
    <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px', border: '2px solid #FFD76D', borderRadius: '16px', mt: '100px' }}>
      <br />
      <Title>Select A Payment Method</Title>
      <br />
      <Grid container spacing='10%' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs='12' sm='8' md='6'>
          <Typography variant='h5' color='#FFD76D'>
            Select Payment Method
          </Typography>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', }} startIcon={<AiFillCreditCard />} >
              credit card
            </Button>
            <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', mx: '20px' }} startIcon={<BiTransfer />} >
              Bank Transfer
            </Button>
            <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', }} startIcon={<CgPaypal />} >
              paypal
            </Button>
          </Box>
          <PaymentForm />
        </Grid>
        <Grid item xs='12' sm='8' md='6' >
          <Box bgcolor='#600060B2' sx={{flexDirection:'column', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'21px', width:'80%' }}>
            <br />
            <Typography variant='h4' color='#FFFFFF' >
              Your Session
            </Typography>
            <br />
            <img src={require("../../assets/BookSession//Rectangle 45.png")} alt='' width='80%' />
            <br />
            <Typography color='#FFFFFF' fontWeight='bold' textAlign='center' margin='20px' border='1px solid #FFFFFF' borderRadius='10px' padding='5px' width='50%'>
            20 minutes <br />999/-
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />
    </Container>
  )
}










const PaymentForm = () => {
  return (
    <form action="">
      <br />
      <div>
        <Typography gutterBottom variant="h6" color='#FFD76D' >
          Enter Card Name
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h6" color='#FFD76D' >
          Enter Card Number
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h6" color='#FFD76D' >
          Mobile Number
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br />
      <div>
        <Typography gutterBottom variant="h6" color='#FFD76D' >
          Enter CVV Code
        </Typography>
        <TextField
          id=""
          sx={{ background: '#3C1D3F', width: '100%' }}
        />
      </div>
      <br /><br />
      <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', width: '100px', }}  >
        Back
      </Button>
      <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', width: '100px', marginX: '20px' }} >
        Pay
      </Button>
      <br /><br />
    </form>
  )
}



