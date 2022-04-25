import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../../components/common/Title'
import { AiFillCreditCard } from "react-icons/ai"
import { BiTransfer } from "react-icons/bi"
import { CgPaypal } from "react-icons/cg"
import { PaymentForm } from './Form'

export const Payment = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '100px', marginX: 'auto' }}>
      <Container fixed sx={{ padding: { xs: '10px auto', md: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', width: '80%' }}>
        <br /><br />
        <Title>Select The Payment Methods</Title>
        <br /><br /><br />
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs='12' sm='12' lg='6'>
            <Typography variant='h5' color='#FFD76D'>
              Select Payment Method
            </Typography>
            <br /> <br />
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: { xs: 'column', md: 'row' }, gap:'20px', }}>
              <Button type='submit'  variant="contained" startIcon={<AiFillCreditCard />}>
                Credit Card
              </Button>
              <Button type='submit'  variant="outlined" startIcon={<BiTransfer />}>
                Bank Transfer
              </Button>
              <Button type='submit'variant="outlined" startIcon={<CgPaypal />}>
              Paypal
              </Button>
            </Box>
            <br /><br />
            <PaymentForm />
          </Grid>
          <Grid item xs='12' sm='10' lg='6' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <Box bgcolor='#600060B2' sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '21px', padding: '10px 20px', gap: '10px', width: '50%' }}>

              <Typography variant='h4' color='#FFFFFF' >
                Your Session
              </Typography>
              <img src={require("../../../../ui/assets/BookSession//Rectangle 45.png")} alt='' width='80%' />

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




